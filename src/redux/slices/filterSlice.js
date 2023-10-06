import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    activeCategory: "salad",
  },
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = filterSlice.actions;
export default filterSlice.reducer;
