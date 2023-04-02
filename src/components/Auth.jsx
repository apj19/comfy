import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

function Auth({ children }) {
  const isloggedin = useSelector((state) => state.login.islogin);
  if (!isloggedin) {
    return <Navigate to="/signin" />;
  }
  return children;
}

export default Auth;
