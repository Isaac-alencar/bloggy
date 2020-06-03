import styled from 'styled-components';


import backgroundImage from '../../assets/background-sing-in.png'

export const SignInMain = styled.div`

  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;

`;


export const FormConteiner = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 700px;
  height: 524px;

  margin: 0 auto;
  position: relative;
  top: 10%;

  background-color: #F4F4F4 ;
  border: none;
  border-radius: 15px;
  box-shadow: 5px 10px 18px #888;


  h3 {
    margin-top: 88px;
    margin-left: 172px;
    text-align: left;
    font-size: 2.8rem;
    font-family: sans-serif;
    color: #333333aa;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    input {
      width: 365px;
      border: 1px solid #ED0E13aa;
      border-radius: 4px;
      padding: 16px;
      margin-top: 24px;
    }
    button {
      margin-top: 68px;
      padding: 16px;
      border: none;
      border-radius: 8px;
      background-color: #ED0E13bb;
      font-family: sans-serif;
      font-size: 1.8rem;
      font-weight: bold;
      color: #ffffffee;
      &:hover{
        opacity: 0.89;
      }
    }
    p{
      position: relative;
      margin-top: 19px;
      text-align: center;
      font-family: sans-serif;
      font-size: 1.8rem;
      font-weight: bold;
      color: #333333bb;
    }

  }

`;