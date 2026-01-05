import axiosInstance from "../services/axiosInstance";

export const downloadMonthlyStatement = (month, year) => {
  return axiosInstance.get(
    `/statement/monthly?month=${month}&year=${year}`,
    { responseType: "blob" }
  );
};
