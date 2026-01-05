import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role: requiredRole }) => {
  // Get role & token from localStorage
  const token = localStorage.getItem("token"); // JWT later
  const role = localStorage.getItem("role");   // "user" or "admin"

  // Not logged in
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Role check (if required)
  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />; // redirect to login if role mismatch
  }

  // Authorized → render child component
  return children;
};

export default ProtectedRoute;
