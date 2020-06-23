import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  width: 50%;
  height: max-content;
  text-transform: uppercase;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h2 {
    margin-top: 20px;
  }

  label {
    font-size: 0.8rem;
    margin-top: 10px;
  }

  input {
    margin: 6px 0px;
    width: 80%;
    height: 20px;
    border: 2px solid #82bfb5;
    border-radius: 3px;
    text-align: center;
  }

  button {
    margin: 15px 0px;
    width: 15%;
    height: 30px;
    border: 1px solid #82bfb5;
    text-transform: uppercase;
  }

  button:hover {
    transition: 0.5s ease;
    cursor: pointer;
    background: #82bfb5;
    color: black;
  }

  .error-msg {
    width: 80%;
    height: max-content;
    background: #c00;
    color: white;
    margin-top: 5px;
    font-size: 0.6rem;
    border-radius: 4px;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    button {
      width: 25%;
      margin: 30px 0px;
    }
  }
`;
