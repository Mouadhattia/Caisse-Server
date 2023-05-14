import axios from "axios";

export const createTable = (table) => {
  return axios.post("http://localhost:5000/table/create", table);
};
export const deleteTable = (id) => {
  return axios.post("http://localhost:5000/table/delete", { id });
};
export const updateTable = (table) => {
  return axios.post("http://localhost:5000/table/update", table);
};
export const getTable = () => {
  return axios.post("http://localhost:5000/table/getAll");
};
