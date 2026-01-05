import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

// Portfolio API
export const getPortfolio = async () => {
  const start = performance.now();

  const response = await axios.get(`${API_BASE_URL}/portfolio`);

  const end = performance.now();
  const latency = Math.round(end - start);

  return {
    data: response.data,
    latency: latency,
  };
};
