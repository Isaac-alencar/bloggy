import styled from 'styled-components';



export const Conteiner = styled.main `
  display: flex;
  flex-direction: column;

  background-color: #e1e1e1;

  margin: 0 auto;
  width: 100%;
  /* height: 100%; */

  .title {
    margin-top: 20px;
    text-align: center;
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #333333cc;
  }
  .post-input-conteiner {
    width: 500px;
    height: 265px;
    background-color: #f4f4f4;
    margin: 100px auto;
    margin-bottom: 50px;
    border-radius: 10px;
    box-shadow: 1px 5px 10px #666666aa;
    
    .input-area {
      display: flex;
      flex-direction: column;

      padding: 16px;
    }

    textarea {
      border: none;
      border-radius: 5px;
      padding: 15px;
      box-shadow: 1px 1px 3px #666666aa;

    }

    button {
      margin-top: 16px;
      margin-left: 68%; 
      width: 150px;
      border: none;
      border-radius: 5px;
      padding: 8px 16px;
      background-color: #ED0E13bb;
      color: #f1f1f1;
      font-weight: bold;
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      &:hover{
        opacity: 0.8;
      }
    }
  }

  .post-modal {
    display: flex;
    flex-direction: column;
    margin: 25px auto;
    padding: 16px;
    width: 500px;
    height: 180px;
    background-color: #f4f4f4;
    border-radius: 10px;

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      span {
        font-size: 1.4rem;
        color: #333333aa;
      }
    }
    .content {
      margin-top: 15px;
      p{
        font-size: 1.5rem;
      }
      #trash-icon {
        margin-top: 8px;
        margin-left: 95%;
        &:hover{
          cursor: pointer;
        }
      }
    }
  }

`;