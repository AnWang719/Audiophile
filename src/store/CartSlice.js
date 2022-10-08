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
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingCartItem = state.items[existingCartItemIndex];
      // console.log(existingCartItem.quantity);

      let updatedTotalAmount;
      // const updatedTotalAmount =
      //   state.totalAmount + action.payload.price * action.payload.quantity;

      if (existingCartItem) {
        state.items[existingCartItemIndex] = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedTotalAmount = state.totalAmount + action.payload.price;
      } else {
        state.items = state.items.concat(action.payload);

        updatedTotalAmount =
          state.totalAmount + action.payload.price * action.payload.quantity;
      }
      state.totalAmount = updatedTotalAmount;
    },

    removeFromCart(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      // let updatedItems;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        state.items[existingCartItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        // updatedItems = [...state.items];
        // updatedItems[existingCartItemIndex] = updatedItem;
      }

      // state.items = updatedItems;
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

    emptyCart(state, action) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const CartActions = CartSlice.actions;

export default CartSlice.reducer;
