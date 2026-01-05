import api from "./api";

export const getAllUsers = async () => {
  try {
    const res = await api.get("/admin/users");
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
