import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAuth from "./useAuth";

export default function ProtectedRoute({ element, ...props }) {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return <div>Loading... </div>;
  }

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return <Route {...props} element={element} />;
}
