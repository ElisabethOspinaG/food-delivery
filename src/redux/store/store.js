import { configureStore } from "@reduxjs/toolkit";
import { paletasReducer } from "../reducers/restaurantesReducer";
import { userReducer } from "../reducers/userReducer";


const reducer = {
  userStore:userReducer,
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