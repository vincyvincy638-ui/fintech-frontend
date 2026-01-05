import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// BASIC AUTH attach panna
export const setAuth = (username, password) => {
  api.defaults.auth = {
    username,
    password,
  };
};

export default api;
