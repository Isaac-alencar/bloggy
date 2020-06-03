import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import api from '../../services/api';
import { login } from '../../services/auth';

import { Conteiner, FormConteiner } from './styles';

export default function SignUp () {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleClick (e) {
    e.preventDefault();

    if (name === "" || username === "" || email === "" || password === "") {
      alert ("Preencha todos campos");
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) alert("Email Inválido!");

    await api.post("/users", {
      name, username, email, password
    });

    const auth = await api.post("/users/authenticate", { username, password });
    login(auth.data.token);
    history.push("/app");

  }



  return (
  <Conteiner>
    <FormConteiner>
      <h3>Sign Up</h3>
      <form method="POST">
        <input 
          type="text" 
          placeholder="Full Name"
          autoComplete="name"
          onChange={e => {setName(e.target.value)}}
          />
        <input 
          type="text" 
          placeholder="Username"
          autoComplete="username"
          onChange={e => {setUsername(e.target.value)}}
          />
        <input 
          type="text" 
          placeholder="E-mail"
          onChange={e => {setEmail(e.target.value)}}
          />
        <input 
          type="password" 
          placeholder="Password"
          autoComplete="current-password"
          onChange={e => {setPassword(e.target.value)}}
          />
        <button onClick={e => {handleClick(e)}}>
          Cadastrar
        </button>
        <p><Link to="/signin">Entrar</Link></p>
      </form>
    </FormConteiner>
  </Conteiner>
  )
}