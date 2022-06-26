import { createSlice, configureStore } from "@reduxjs/toolkit";

const KEY_CART_ITEM = "cartItems";

const initialState = { items: window.localStorage.getItem(KEY_CART_ITEM)? JSON.parse(window.localStorage.getItem(KEY_CART_ITEM)) : [], isCartOpen: false };

const cartItemsSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    decrement(state, action) {
      const selectedItem = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items[selectedItem].quantity--;
      window.localStorage.setItem(KEY_CART_ITEM, JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      window.localStorage.setItem(KEY_CART_ITEM, JSON.stringify(state.items));
    },
    addToCart(state, action) {
      const { id } = action.payload;
      const selectedItem = state.items.findIndex((item) => item.id === id);
      if (selectedItem > -1) {
        state.items[selectedItem].quantity++;
      } else {
        const productWithQuantity = { ...action.payload, quantity: 1 };
        state.items = [...state.items, productWithQuantity];
      }
      window.localStorage.setItem(KEY_CART_ITEM, JSON.stringify(state.items));
    },
    toggleCartPreview(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

const store = configureStore({
  reducer: cartItemsSlice.reducer,
});

export const cartItemsActions = cartItemsSlice.actions;

export default store;
