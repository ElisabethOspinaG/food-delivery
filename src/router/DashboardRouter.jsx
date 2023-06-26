import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import Home from "../pages/Home";
import Order from "../pages/Order";

const DashboardRouter = () => {
  return (
    <Routes>

      <Route path="/order" element={<Order />} />
      

    </Routes>
  );
};

export default DashboardRouter;