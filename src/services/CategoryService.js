import axios from "axios";

export const getCategory = () => {
  return axios.post("http://localhost:5000/category/getAll");
};
export const createCategory = (menu) => {
  return axios.post("http://localhost:5000/category/create", menu);
};
export const deleteCategory = (id) => {
  return axios.post("http://localhost:5000/category/delete", { id });
};
export const updateCategory = (menu) => {
  return axios.post("http://localhost:5000/category/update", menu);
};
export const uploadPicture = (formData) => {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  return axios.post(`http://localhost:5000/upload`, formData, config);
};
