import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import api from "../../services/api";
import { login } from '../../services/auth';

import { FormConteiner, SignInMain } from './styles';

export default function SignIn () {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleClick(e) {
    e.preventDefault();

    if (username.username === "" || password.password === "") {
      alert("Ops, preencha os campos de login!");
    }
    
    const response = await api.post("/users/authenticate", { username, password });
    login(response.data.token);
    history.push("/app");
  }

  return (
    <SignInMain>
      <FormConteiner>
        <h3>Sign In</h3>
        <form method="POST">
          <input 
            type="text" 
            placeholder="Username"
            autoComplete="username"
            onChange={e => {setUsername(e.target.value)}}
            />
          <input 
            type="password" 
            placeholder="Password"
            autoComplete="current-password"
            onChange={e => {setPassword(e.target.value)}}
            />
          <button onClick={e => {handleClick(e)}}>
            Entrar
          </button>
          <p><Link to="/signup">Cadastre-se</Link></p>
        </form>
      </FormConteiner>
    </SignInMain>
  )
}