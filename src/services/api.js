import axios from "axios";

const api = axios.create({
  baseURL: "https://apice-estoque.herokuapp.com/",
});

export default api;
