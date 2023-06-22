import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducers";
import { counterReducer } from "../reducers/counterReducer";
 
const reducer ={
   user: userReducer,
   counter: counterReducer,
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
