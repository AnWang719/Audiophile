import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],

  totalAmount: 0,
};

let updatedCounter;
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload);

      state.totalAmount = action.payload.price * action.payload.quantity;

      //   console.log(action.payload, state.totalAmount);
    },

    removeFromCart(state, action) {
      updatedCounter = state.counter - 1;
      if (updatedCounter === 0) return;
    },
  },
});

export const CartActions = CartSlice.actions;

export default CartSlice.reducer;
