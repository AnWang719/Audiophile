import { createSlice } from "@reduxjs/toolkit";
const LOCAL_STORAGE_KEY = "audiophile";
const InitialState = {
  items: [],
  totalAmount: 0,
  isAddCartBtn: false,
};

const getState =
  localStorage.getItem(LOCAL_STORAGE_KEY) !== null
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    : InitialState;

const CartSlice = createSlice({
  name: "cart",
  initialState: getState,
  reducers: {
    addToCart(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedTotalAmount;

      if (existingCartItem) {
        state.items[existingCartItemIndex] = {
          ...existingCartItem,
          quantity:
            existingCartItem.quantity +
            (state.isAddCartBtn ? action.payload.quantity : 1),
        };

        updatedTotalAmount =
          state.totalAmount +
          action.payload.price *
            (state.isAddCartBtn ? action.payload.quantity : 1);
      } else {
        state.items = state.items.concat(action.payload);
        updatedTotalAmount =
          state.totalAmount + action.payload.price * action.payload.quantity;
      }
      state.totalAmount = updatedTotalAmount;

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    },

    isAddCartBtnHandler(state, action) {
      state.isAddCartBtn = true;
    },
    isAddFromCart(state, action) {
      state.isAddCartBtn = false;
    },

    removeFromCart(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;

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
    },

    emptyCart(state, action) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const CartActions = CartSlice.actions;

export default CartSlice.reducer;
