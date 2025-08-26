import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoutes({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();

  if (isLoading) return <p>Loading...</p>;

  if (!isAuthenticated) {
    // Redirect unauthenticated users to Home ("/")
    // while preserving the route they tried
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children; // Render protected page
}