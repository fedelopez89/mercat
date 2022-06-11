import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { items: [], isCartOpen: false };

const cartItemsSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    decrement(state, action) {
      const selectedItem = state.items.findIndex(
        (item) => item.id === action.payload
      );
      state.items[selectedItem].quantity--;
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
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
