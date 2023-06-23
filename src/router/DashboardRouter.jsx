import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "../pages/SearchPage";


const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <SearchPage path="/search"></SearchPage>

    </Routes>
  );
};

export default DashboardRouter;