import React, { useState } from "react";

import { Container, Content } from "./styles";

const emptyProduct = {
  name: "",
  recommendation: "",
  exposure: 0,
  stock: 0,
  buy: 0,
  sell: 0,
};

function AddProductModal({ addProduct, closeModal }) {
  const [product, setProduct] = useState(emptyProduct);
  const [errors, setErrors] = useState([]);

  function handleInputChange(e) {
    const { value, name } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });
  }

  async function submitForm() {
    const err = await addProduct(product);
    setErrors(err);
  }

  return (
    <Container onClick={closeModal}>
      <Content onClick={(e) => e.stopPropagation()}>
        <div>
          <h2>Novo Produto</h2>
          <label>Nome do Produto*:</label>
          <input
            name="name"
            type="text"
            onChange={handleInputChange}
            value={product.name}
          />
          <label>Indicação*:</label>
          <input
            name="recommendation"
            type="text"
            onChange={handleInputChange}
            value={product.recommendation}
          />

          <label>Quantidade em Exibição*:</label>
          <input
            name="exposure"
            type="number"
            onChange={handleInputChange}
            value={product.exposure}
          />

          <label>Quantidade em Estoque*:</label>
          <input
            name="stock"
            type="number"
            onChange={handleInputChange}
            value={product.stock}
          />

          <label>Valor Compra*:</label>
          <input
            name="buy"
            type="text"
            onChange={handleInputChange}
            value={product.buy}
          />

          <label>Valor Venda*:</label>
          <input
            name="sell"
            type="text"
            onChange={handleInputChange}
            value={product.sell}
          />
          {errors &&
            errors.map((error, idx) => (
              <div className="error-msg" key={idx}>
                <p>{error}</p>
              </div>
            ))}
          <button onClick={submitForm}>Criar</button>
        </div>
      </Content>
    </Container>
  );
}

export default AddProductModal;
