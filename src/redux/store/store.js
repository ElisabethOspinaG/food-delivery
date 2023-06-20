import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
 // Importa el combinador de reducers
const reducer ={

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
