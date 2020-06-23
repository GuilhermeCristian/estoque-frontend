import React from "react";

import { Container, Content } from "./styles";

function DeleteProductModal({ deleteProduct, closeModal }) {
  return (
    <Container onClick={closeModal}>
      <Content onClick={(e) => e.stopPropagation()}>
        <div>
          <h2>Tem certeza que deseja APAGAR o produto?</h2>
          <div id="buttons">
            <button onClick={closeModal}>Cancelar</button>
            <button onClick={deleteProduct}>Sim, apagar</button>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default DeleteProductModal;
