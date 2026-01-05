import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

// axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Basic Auth attach panna
export const authHeader = (username, password) => {
  return {
    auth: {
      username,
      password,
    },
  };
};

export default api;
