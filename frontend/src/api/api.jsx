import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/products';

export const fetchAllProducts = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

export const fetchFeaturedProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/featured`);
  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios.post(API_BASE_URL, product);
  return response.data;
};

export const updateProductStock = async (id, stock) => {
  const response = await axios.patch(`${API_BASE_URL}/${id}/stock`, { stock });
  return response.data;
};

export const updateProductPrice = async (id, price) => {
  const response = await axios.patch(`${API_BASE_URL}/${id}/price`, { price });
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/${id}`);
  return response.data;
};
