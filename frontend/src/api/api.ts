import axios from "axios";

const API_BASE = "http://localhost:8080/api";

export const getProducts = async () => {
  const res = await axios.get(`${API_BASE}/products`);
  return res.data;
};

export const getRecipe = async (ingredients: string[]) => {
  const res = await axios.post(`${API_BASE}/recipe`, { ingredients });
  return res.data;
};
