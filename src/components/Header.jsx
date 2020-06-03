import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

import { logout } from '../services/auth';

export default function Header () {

  const history = useHistory();
  
  function handleLogout() {
    logout();
    history.push("/signin");
  }

  return(
    <Conteiner>
      <nav>
        <h1>Bloggy</h1>
        <button onClick={ e => {handleLogout(e)}}>Sair</button>
      </nav>
    </Conteiner>
  );
}

const Conteiner = styled.header `

  padding: 25px;
  height: 100px;
  background-color: #f4f4f4;
  box-shadow: 0px 1px 5px #444444aa;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 90%;
    margin: 0 auto;
    padding: 5px;

    h1 {
    font-family: 'Bungee Shade', cursive;
    letter-spacing: 3px;
    font-size: 3rem;
    text-align: center;
    color: #ED0E13aa;
      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
    button {
      border: 1px solid transparent;
      border-radius: 8px;
      padding: 8px 16px;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      font-size: 1.6rem;
      color: #fff;
      background-color: #ed0e13aa;

      transition: all linear 350ms;
      &:hover {
        opacity: 0.7;
        cursor: pointer;
        background-color: #f4f4f4;
        color: #ed0e13aa;
        border: 1px solid #ed0e13aa;
      }
    }
  }
`;