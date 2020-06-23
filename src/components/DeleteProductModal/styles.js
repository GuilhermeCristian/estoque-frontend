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
  border-radius: 2px;
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
    margin-top: 30px;
  }
  #buttons {
    display: flex;
    flex-direction: row;
    padding: 15px;

    button {
      margin: 15px 10px;
      width: 25%;
      height: 35px;
      border: 2px solid #82bfb5;
      text-transform: uppercase;
    }

    button:hover {
      transition: 0.5s ease;
      cursor: pointer;
      background: #f55;
      color: black;
      border: 2px solid #f55;
    }
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    width: 80%;
    #buttons button {
      width: 45%;
      height: 50px;
    }
  }
`;
