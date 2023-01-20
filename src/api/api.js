import axios from "axios";

const api = axios.create({
  baseURL: "https://63c82060075b3f3a91dacb71.mockapi.io/api/v1/",
});

export default api;
