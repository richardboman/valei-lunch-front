import axios from "axios";
import config from "../config/config.js";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    alert("Ett oväntat fel inträffade.");
  }
  return Promise.reject(error);
});

const get = (endPoint) => axios.get(config.api.base + endPoint);
const post = (endPoint, data) => axios.post(config.api.base + endPoint, data);

export default {
  get,
  post,
  put: axios.put,
  delete: axios.delete,
};
