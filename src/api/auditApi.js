import axiosInstance from "../services/axiosInstance";

export const getAuditLogs = () => {
  return axiosInstance.get("/audit/logs");
};
