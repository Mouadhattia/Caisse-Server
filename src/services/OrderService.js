import axios from "axios";

export const getOrders = () => {
  return axios.post("http://localhost:5000/order/getAll");
};
export const getTable = (id) => {
  return axios.post("http://localhost:5000/table/getbyId", { id });
};
export const updateOrder = (order) => {
  return axios.post("http://localhost:5000/order/update", order);
};
