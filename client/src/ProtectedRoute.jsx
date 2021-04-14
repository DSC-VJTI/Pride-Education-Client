import React from "react";
import { useAuthState } from "./context/context.js";
import { Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  const state = useAuthState();
  const Component = props.component;
  const isAuthenticated = state.isAuthenticated;

  return isAuthenticated ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};

export default ProtectedRoute;
