import axios from "axios";

export const getProduct = (catId) => {
  const data = {
    catId,
  };
  return axios.post("http://localhost:5000/product/getbyCat", data);
};
export const getProducts = () => {
  return axios.post("http://localhost:5000/product/getAll");
};
export const getOneProducts = (id) => {
  const data = {
    id: Number(id),
  };
  return axios.post("http://localhost:5000/product/getbyId", data);
};
export const createProduct = (product) => {
  return axios.post("http://localhost:5000/product/create", product);
};
export const deleteProduct = (id) => {
  return axios.post("http://localhost:5000/product/delete", { id });
};
export const updateProduct = (product) => {
  return axios.post("http://localhost:5000/product/update", product);
};

export const fetchSupplements = (id) => {
  const data = {
    id: Number(id),
  };
  return axios.post("http://localhost:5000/supplement/getAll", data);
};
export const createSupp = (supp) => {
  return axios.post("http://localhost:5000/supplement/create", supp);
};
export const deleteSupp = (id) => {
  return axios.post("http://localhost:5000/supplement/delete", { id });
};
export const updateSupp = (supp) => {
  return axios.post("http://localhost:5000/supplement/update", supp);
};
