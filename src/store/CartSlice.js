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
      //   console.log(action.payload);
      state.items.push({
        value: action.payload,
        // counter: 0,
      });

      updatedCounter = action.payload.counter + 1;

      state.totalAmount = action.payload.price * updatedCounter;
      action.payload.counter = updatedCounter;
      console.log(action.payload);
    },

    removeFromCart(state, action) {
      updatedCounter = state.counter - 1;
      if (updatedCounter === 0) return;
    },
  },
});

export const CartActions = CartSlice.actions;

export default CartSlice.reducer;
