import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "../reducers/userReducer";
import { counterReducer } from "../reducers/counterReducer";
import {restaurantReducer} from "../reducers/restaurantsReducer";
 
const reducer ={
   user: userReducer,
   counter: counterReducer,
   restaurantStore: restaurantReducer,
};

const store = configureStore({
   reducer,
   devTool: process.env.NODE_ENV !== "production",
   middleware:(getDefaultMiddleware)=>
   getDefaultMiddleware({
      serializableCheck:false,
   }),
});

export default store;