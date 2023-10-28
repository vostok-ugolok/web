import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import headerReducer from "./slices/headerSlice";
import cartReducer from "./slices/cartSlice";

export default configureStore({
  reducer: {
    filter: filterReducer,
    header: headerReducer,
    cart: cartReducer,
  },
});
