import React from "react";
import { Container } from "./styles";
import deleteIcon from "../../assets/delete-icon.png";
import editIcon from "../../assets/edit-icon.png";

function ProductTableItem({ product, deleteProduct, editProduct }) {
  return (
    <Container>
      <p>{product.name}</p>
      <p>{product.recommendation}</p>
      <p>{product.exposure}</p>
      <p>{product.stock}</p>
      <p>
        R$<b>{product.buy}</b>
      </p>
      <p>
        R$<b>{product.sell}</b>
      </p>
      <p>
        R$
        <b>
          {product.sell * (product.stock + product.exposure) -
            product.buy * (product.stock + product.exposure)}
        </b>
      </p>
      <div>
        <button onClick={(e) => editProduct(product)}>
          <img src={editIcon} alt="Icon Edit"></img>
        </button>
        <button onClick={(e) => deleteProduct(product)}>
          <img src={deleteIcon} alt="Icon Delete"></img>
        </button>
      </div>
    </Container>
  );
}

export default ProductTableItem;
