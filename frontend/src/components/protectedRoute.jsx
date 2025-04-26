import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider.jsx";

export default function protectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) {
    // not logged in → redirect
    return <Navigate to="/signin" replace />;
  }
  return children;
}
