import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import CartSlice from "./cart-slice";
import uiSilicle from "./ui-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: CartSlice.reducer,
    ui: uiSilicle.reducer,
  },
});
export default store;
