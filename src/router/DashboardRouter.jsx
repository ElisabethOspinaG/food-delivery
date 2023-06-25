import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import Home from "../pages/Home";


const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />

    </Routes>
  );
};

export default DashboardRouter;