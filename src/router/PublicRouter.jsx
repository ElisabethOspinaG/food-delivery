import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRouter = ({ isAutentication }) => {
  return <div>{isAutentication ? <Outlet />:<Navigate to="/user" />  }</div>;
};

export default PublicRouter;