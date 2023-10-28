import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPrice: 0,
    products: [],
    amountOfProducts: 0,
  },
  reducers: {
    addProduct(state, action) {
      const findItem = state.products.find(
        (obj) => obj.id === action.payload.id
      );

      if (findItem) {
        findItem.count += 1;
      } else {
        state.products.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice += +action.payload.price;
      state.amountOfProducts += 1;
    },
    removeProduct(state, action) {
      const findItem = state.products.find(
        (obj) => obj.id === action.payload.id
      );
      findItem.count -= 1;
      state.totalPrice -= +action.payload.price;
      state.amountOfProducts -= 1;
      if (findItem.count === 0) {
        console.log(state.products);
        state.products = state.products.filter((obj) => obj.id !== findItem.id);
      }
    },
    deleteProduct(state, action) {
      console.log(action.payload);
      console.log(state.products);
      const findItem = state.products.find((obj) => obj.id === action.payload);
      console.log(findItem);
      state.totalPrice -= findItem.count * findItem.price;
      state.amountOfProducts -= findItem.count;
      state.products = state.products.filter(
        (obj) => obj.id !== action.payload
      );
    },
    clearProducts(state) {
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, deleteProduct, clearProducts } =
  cartSlice.actions;
export default cartSlice.reducer;
