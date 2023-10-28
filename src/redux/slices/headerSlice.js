import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    isCartOpen: false,
  },
  reducers: {
    setOpenCart(state, action) {
      if (action.payload === undefined) {
        state.isCartOpen = !state.isCartOpen;
      } else {
        state.isCartOpen = action.payload;
      }
    },
  },
});

export const { setOpenCart } = headerSlice.actions;
export default headerSlice.reducer;
