import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from '../pages/Register';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import Layout from '../pages/Layout';

import Home from '../pages/Home';
import RestaurantPage from '../pages/RestaurantPage';
import StartPage from '../pages/StartPage';
import SearchPage from '../pages/SearchPage';
import OrderPlaced from '../pages/OrderPlaced';
import LoginAdministrator from '../pages/LoginAdministrator';
import Comments from "../pages/Comments";
import NoFound from '../pages/NoFound';
import Location from '../pages/Location';
import Profile from '../pages/Profile';

const AppRouter = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route element={<PublicRouter isAutentication={isLoggedIn} />}>
                        <Route path="start" element={<StartPage />} />
              
                        <Route path="Register" index element={<Register />} />
                        <Route path="admin" element={<LoginAdministrator />} />
                    </Route>
                    <Route element={<PrivateRouter isAutentication={isLoggedIn} />}>
                        <Route path="home" element={<Home />} />
                        <Route path="restaurante" element={<RestaurantPage/>} />
                        <Route path='location' element={<Location />} />
                        <Route path="search" element={<SearchPage />} />
                        <Route path="order" element={<OrderPlaced />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="comments" element={<Comments />} />
                        <Route path="noFound" element={<NoFound />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;