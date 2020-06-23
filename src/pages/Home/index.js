import React, { useState, useRef, useEffect } from "react";
import {
  Component,
  MenuComponent,
  SearchComponent,
  InsertComponent,
  TableComponent,
  TableHeader,
  PaginationMenu,
} from "./styles";
import { Redirect } from "react-router-dom";

import api from "../../services/api";
import logo from "../../assets/logo apice.png";
import searchIcon from "../../assets/icon-search.png";

import AddProductModal from "../../components/AddProductModal";
import EditProductModal from "../../components/EditProductModal";
import DeleteProductModal from "../../components/DeleteProductModal";
import ProductTableItem from "../../components/ProductTableItem";

function Home({ isLoggedIn }) {
  const [products, setProducts] = useState([]);
  const [modalActive, setModalActive] = useState(undefined);
  const modalRoutine = useRef();
  const originalProduct = useRef();
  const pagination = useRef({ page: 1 });
  const search = useRef("");

  useEffect(() => {
    async function getInitialProducts() {
      try {
        await getProducts(1);
      } catch (err) {
        console.log(err.response);
      }
    }

    getInitialProducts();
  }, []);

  if (!isLoggedIn) return <Redirect to="/login" />;

  function logout() {
    localStorage.removeItem("token");
    window.location.reload();
  }

  function handleSearchInput(e) {
    const value = e.target.value;
    search.current = value;
    getProducts(1);
  }

  async function getProducts(page) {
    try {
      let url = "/estoque?page=" + page;
      if (search.current) url += "&search=" + search.current;

      const response = await api.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const { docs, ...rest } = response.data;
      console.log(rest);
      pagination.current = rest;
      setProducts(docs);
    } catch (err) {
      console.log(err.response);
    }
  }

  function closeModal() {
    setModalActive(undefined);
  }

  function addProduct() {
    modalRoutine.current = async (p) => {
      try {
        const response = await api.post(`/estoque`, p, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response);
        getProducts(pagination.current.page);
        setModalActive(undefined);
      } catch (err) {
        console.log(err.response);
        return err.response.data;
      }
    };

    setModalActive("AddProduct");
  }

  function editProduct(product) {
    originalProduct.current = product;
    modalRoutine.current = async (newP) => {
      try {
        const response = await api.put(`/estoque/${product._id}`, newP, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response);
        getProducts(pagination.current.page);
        setModalActive(undefined);
      } catch (err) {
        console.log(err.response);
        return err.response.data;
      }
    };

    setModalActive("EditProduct");
  }

  function deleteProduct(product) {
    modalRoutine.current = async () => {
      try {
        const response = await api.delete(`/estoque/${product._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response);
        getProducts(pagination.current.page);
        setModalActive(undefined);
      } catch (err) {
        console.log(err.response);
      }
    };

    setModalActive("DeleteProduct");
  }

  function toPage(page) {
    if (!page || page < 1 || page > pagination.current.totalPages) return;
    getProducts(page);
  }

  return (
    <Component>
      <MenuComponent>
        <div className="MenuContent">
          <img src={logo} alt="Logo"></img>
          <button onClick={logout}>sair</button>
        </div>
      </MenuComponent>
      <SearchComponent>
        <p>Controle de entrada e sáida de produtos vendidos</p>
        <p>Ativos para Venda</p>
        <div className="SearchContent">
          <input
            type="search"
            placeholder="Pesquisar..."
            onChange={handleSearchInput}
          ></input>

          <button type="">
            <img src={searchIcon} alt="Icon Search"></img>
          </button>
        </div>
      </SearchComponent>
      <InsertComponent>
        <button onClick={addProduct}>NOVO PRODUTO</button>
      </InsertComponent>
      <PaginationMenu>
        <button onClick={() => toPage(pagination.current.prevPage)}>
          {"<"}
        </button>

        <button onClick={() => toPage(1)}>1</button>

        <button className="active">{pagination.current.page}</button>

        <button onClick={() => toPage(pagination.current.totalPages)}>
          {pagination.current.totalPages}
        </button>

        <button onClick={() => toPage(pagination.current.nextPage)}>
          {">"}
        </button>
      </PaginationMenu>
      <div className="overflow-content">
        <TableComponent>
          <TableHeader>
            <p>Nome</p>
            <p>Indicação</p>
            <p>Qtd. Exposição</p>
            <p>Qtd. Estoque</p>
            <p>Valor Compra</p>
            <p>Valor Venda</p>
            <p>Valor Lucro</p>
          </TableHeader>
          {products.map((p) => (
            <ProductTableItem
              key={p._id}
              product={p}
              deleteProduct={deleteProduct}
              editProduct={editProduct}
            />
          ))}
          <TableHeader>
            <p>Nome</p>
            <p>Indicação</p>
            <p>Qtd. Exposição</p>
            <p>Qtd. Estoque</p>
            <p>Valor Compra</p>
            <p>Valor Venda</p>
            <p>Valor Lucro</p>
          </TableHeader>
        </TableComponent>
      </div>
      <PaginationMenu>
        <button onClick={() => toPage(pagination.current.prevPage)}>
          {"<"}
        </button>

        <button onClick={() => toPage(pagination.current.firstPage)}>1</button>

        <button className="active" id="butt">
          {pagination.current.page}
        </button>

        <button onClick={() => toPage(pagination.current.totalPages)}>
          {pagination.current.totalPages}
        </button>

        <button onClick={() => toPage(pagination.current.nextPage)}>
          {">"}
        </button>
      </PaginationMenu>

      {modalActive === "AddProduct" && (
        <AddProductModal
          addProduct={modalRoutine.current}
          closeModal={closeModal}
        />
      )}
      {modalActive === "EditProduct" && (
        <EditProductModal
          originalProduct={originalProduct.current}
          editProduct={modalRoutine.current}
          closeModal={closeModal}
        />
      )}
      {modalActive === "DeleteProduct" && (
        <DeleteProductModal
          deleteProduct={modalRoutine.current}
          closeModal={closeModal}
        />
      )}
    </Component>
  );
}

export default Home;
