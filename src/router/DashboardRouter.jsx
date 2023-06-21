import React from "react";
import { Route, Routes } from "react-router-dom";


const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/addPaletas" element={<AddPaletas />} />
    </Routes>
  );
};

export default DashboardRouter;