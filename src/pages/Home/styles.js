import styled from "styled-components";

export const Component = styled.div`
  background: #fff;
  width: 100%;
  height: 100vh;

  @media screen and (max-width: 768px) {
    .overflow-content {
      min-height: 400px;
      overflow-x: scroll;
    }
  }
`;

export const MenuComponent = styled.div`
  background: #fff;
  width: 100%;
  height: max-content;

  .MenuContent {
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .MenuContent img {
    width: 120px;
  }

  .MenuContent button {
    right: 30px;
    top: 30px;
    position: absolute;
    background: #fff;
    border: 2px solid #82bfb5;
    width: 100px;
    height: 35px;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-family: Agency FB;
    color: #000;

    @media screen and (max-width: 768px) {
      width: 60px;
    }
  }
  .MenuContent button:hover {
    transition: 0.5s ease;
    cursor: pointer;
    background: #82bfb5;
    color: black;
  }
`;

export const SearchComponent = styled.div`
  width: 100%;
  height: max-content;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    text-align: center;
    font-family: Agency FB;
    font-size: 2rem;
  }

  .SearchContent {
    width: 100%;
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .SearchContent input {
    width: 50%;
    height: 30px;
    border: 2px solid #82bfb5;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }

  .SearchContent button {
    border: 2px solid #82bfb5;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    border-left: none;
    width: 70px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button:hover {
    transition: 0.5s ease;
    cursor: pointer;
    background: #82bfb5;
    color: black;
  }
  .SearchContent button img {
    width: 15px;
  }
`;
export const InsertComponent = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 150px;
    height: 30px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #82bfb5;
    font-family: Helvetica;
    text-align: center;
    color: #000;
    font-size: 0.8rem;
  }

  button:hover {
    transition: 0.5s ease;
    cursor: pointer;
    background: #82bfb5;
    color: black;
  }
`;

export const TableComponent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  font-family: Helvetica;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    margin-left: 30px;
    width: 750px;
  }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid #82bfb5;
  font-size: 0.9rem;
  text-transform: uppercase;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px 0;
  }

  p:not(:last-child) {
    border-right: 1px solid #82bfb5;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }
  }
`;

export const PaginationMenu = styled.div`
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 30px;
    height: 30px;
    background: #fff;
    border: none;
    border-radius: 50%;
    margin: 3px;
    transition: 0.5s ease;
    outline: none;
    border: 1px solid #000;

    &.active {
      width: 40px;
      height: 40px;
      background: #82bfb5;
      font-size: 1rem;
      font-weight: bolder;
      border: 1px solid #000;
    }

    &:hover {
      cursor: pointer;
      background: #82bfb5;
      color: black;
    }
  }
`;
