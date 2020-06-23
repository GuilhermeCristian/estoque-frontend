import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 10px 0;
  font-size: 1rem;
  position: relative;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &:nth-child(2n) {
    background: #82bfb555;
  }

  button {
    border: none;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #146b67;
    width: 32px;
    height: 32px;
    margin-right: 4px;
    border-radius: 50%;
    vertical-align: middle;
    cursor: pointer;
  }

  button img {
    filter: invert(1);
    width: 15px;
  }

  div {
    position: absolute;
    display: flex;
    right: -80px;
    opacity: 0;
    transition: opacity 0.25s ease;
  }

  &:hover div {
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
