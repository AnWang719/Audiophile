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
      console.log(action.payload);
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
    },

    removeFromCart(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.quantity === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      state.items = updatedItems;
      state.totalAmount = updatedTotalAmount;
      // return {
      //   items: updatedItems,
      //   totalAmount: updatedTotalAmount
      // };

      // const updatedTotalAmount =
      //   state.totalAmount - action.payload.price * action.payload.quantity;
      // const existingCartItemIndex = state.items.findIndex(
      //   (item) => item.id === action.payload.id
      // );

      // const existingCartItem = state.items[existingCartItemIndex];

      // if (existingCartItem) {
      //   state.items[existingCartItemIndex] = {
      //     ...existingCartItem,
      //     quantity: existingCartItem.quantity - action.payload.quantity,
      //   };
      // } else {
      //   state.items = state.items.concat(action.payload);
      // }
      // state.totalAmount = updatedTotalAmount;
    },
  },
});

export const CartActions = CartSlice.actions;

export default CartSlice.reducer;
