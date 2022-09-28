import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./CartSlice";

const store = configureStore({
  reducer: CartSliceReducer,
});

export default store;
