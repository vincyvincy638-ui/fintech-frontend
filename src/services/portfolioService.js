import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const getPortfolio = async () => {
  const start = performance.now();

  const response = await axios.get(`${API_BASE_URL}/portfolio`);

  const end = performance.now();

  return {
    data: response.data,
    latency: Math.round(end - start),
  };
};
