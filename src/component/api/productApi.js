import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params) => {
    const url = "/user";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  post: (data) => {
    const url = "/user";
    return axiosClient.post(url, data);
  },
  delete: (id) => {
    const url = `/user/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
