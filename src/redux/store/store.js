import { configureStore } from "@reduxjs/toolkit";
import { paletasReducer } from "../reducers/restaurantesReducer";


const reducer = {
  
  paletasStore: paletasReducer,
};

const store = configureStore({
  reducer,
  devTool: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;