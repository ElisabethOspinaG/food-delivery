
import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardRouter from "./DashboardRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register";
import { auth } from "../Firebase/firebaseConfig";
import NavigationBar from "../pages/NavigationBar";
import RestaurantPage from "../pages/RestaurantPage";
import Home from "../pages/Home";
import DishPage from "../pages/DishPage";
const Router = () => {
 
  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);

      } else {
        setIsLoggedIn(false);
      }
      setCheking(false);
    });
  }, [setIsLoggedIn, setCheking]);

  if (cheking) {
    return <h1>Espere....</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRouter isAutentication={isLoggedIn} />}>
          <Route path="/" element={<Register />} />
          <Route path="/user" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/restaurant/:id"element={<RestaurantPage/>}></Route>
          <Route path="/dish/:nombrePlato"element={<DishPage/>}></Route>
        </Route>
        <Route element={<PrivateRouter isAutentication={isLoggedIn} />}>
          <Route path="/*" element={<DashboardRouter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;