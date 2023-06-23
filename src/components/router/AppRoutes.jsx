import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantPage from '../../pages/RestaurantPage';
import Home from '../../pages/Home';
import StartPage from '../../pages/StartPage';
import SearchPage from '../../pages/SearchPage';
import OrderPlaced from '../../pages/OrderHistory';
import Login from '../../pages/Login';
import LoginAdministrator from '../../pages/LoginAdministrator';
import Comments from "../../pages/Comments";
import NoFound from '../../pages/NoFound';
import Location from '../../pages/Location';
import Profile from '../../pages/Profile';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RestaurantPage />} />
        <Route path="start" element={<StartPage/>} />
        <Route path='location' element={<Location/>}/>
        <Route path="home" element={<Home/>} />
        <Route path="search" element={<SearchPage/>} />
        <Route path="order" element={<OrderPlaced/>} />
        <Route path="login" element={<Login/>} />
        <Route path="admin" element={<LoginAdministrator/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="comments" element={<Comments/>} />
        <Route path="noFound" element={<NoFound/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
