import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .box {
    width: 30%;
    height: 70vh;
    background: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    display: flex;
  }

  .box-content {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-transform: uppercase;
    color: #000;
  }
  img {
    width: 30%;
    height: 25%;
    margin: 20px 0px;
  }

  h3 {
    margin-bottom: 15px;
  }

  label {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    margin: 10px 0px;
  }

  input {
    width: 70%;
    height: 20px;
    text-align: center;
    font-family: Helvetica, sans-serif;
    font-size: 1rem;
    border-color: #000;
  }

  .error-msg {
    width: 80%;
    height: max-content;
    background: #c00;
    color: white;
    margin-top: 10px;
    font-size: 0.7rem;
    border-radius: 4px;
    text-align: center;
  }

  button {
    margin-top: 30px;
    background: #fff;
    border: 2px solid #82bfb5;
    width: 30%;
    height: 35px;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    color: #000;
  }

  button:hover {
    transition: 0.5s ease;
    cursor: pointer;
    background: #82bfb5;
    color: black;
  }

  @media screen and (max-width: 1024px) {
    .box {
      width: 70%;
    }

    img {
      width: 25%;
    }
    h3 {
      font-size: 1rem;
    }
    label {
      font-size: 1.1em;
    }
  }
  @media screen and (max-width: 768px) {
    .box {
      width: 80%;
    }
  }
`;
