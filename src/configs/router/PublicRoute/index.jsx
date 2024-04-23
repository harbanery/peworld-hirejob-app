import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem(`token`);
  if (!token) {
    return children;
  }
  return <Navigate to={`/`} replace />;
};

export default PublicRoute;
