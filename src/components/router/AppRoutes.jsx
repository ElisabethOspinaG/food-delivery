import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RestaurantPage from '../restaurantPage/RestaurantPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RestaurantPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
