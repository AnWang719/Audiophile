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
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.quantity;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        state.items[existingCartItemIndex] = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.payload.quantity,
        };
      } else {
        state.items = state.items.concat(action.payload);
      }

      state.totalAmount = updatedTotalAmount;
      //   console.log(existingCartItem);

      //   console.log(existingCartItemIndex);

      //   const existingCartItem = state.items[existingCartItemIndex];

      //   //   console.log(existingCartItem);
      //   let updatedItems;

      //   if (existingCartItem) {
      //     const updatedItem = {
      //       ...existingCartItem,
      //       quantity: existingCartItem.quantity + action.payload.quantity,
      //     };
      //     console.log(updatedItem);
      //     state.items[existingCartItemIndex] = updatedItem;
      //     // updatedItems = [...state.items];
      //     // updatedItems[existingCartItemIndex] = updatedItem;
      //   } else {
      //     updatedItems = state.items.concat(action.payload);
      //   }

      //   state.items = updatedItems;
      //   state.totalAmount = updatedTotalAmount;

      //   console.log(action.payload, state.items);
    },

    removeFromCart(state, action) {
      updatedCounter = state.counter - 1;
      if (updatedCounter === 0) return;
    },
  },
});

export const CartActions = CartSlice.actions;

export default CartSlice.reducer;
