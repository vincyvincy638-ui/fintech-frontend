import api from "../api/api";

export const login = async (username, password) => {
  // Replace with real JWT login later
  const res = await api.post("/auth/login", { username, password });
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};
