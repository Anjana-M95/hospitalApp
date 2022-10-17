import { Redirect } from "react-router-dom";
import React from "react";
import { useAuth } from "./auth";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();
  const session = localStorage.getItem("user");

  if (!auth.user && session === null) {
    return <Redirect to="/Signup" />;
  }

  return children;
};
