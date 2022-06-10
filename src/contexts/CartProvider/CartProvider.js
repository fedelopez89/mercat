import React, { useReducer, createContext, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const initialState = {
  isCartOpen: false,
  items: [],
};

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "REDUCE_QUANTITY":
      const exist = state.items
        .map((item) => item.id)
        .includes(action.payload.cartItemId);
      let cartItems2 = null;
      if (exist) {
        const items = state.items.map((item) => {
          if (item.id === action.payload.cartItemId) {
            if (item.quantity > 1) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
          } else {
            return item;
          }
        });
        cartItems2 = [...items];
      } else {
        cartItems2 = [...state.items, action.payload.cartItem];
      }
      return {
        ...state,
        items: cartItems2,
      };
    case "TOGGLE_CART_POPUP":
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case "ADD_TO_CART":
      const id = action.payload.cartItem.id;
      const isOld = state.items.map((item) => item.id).includes(id);
      let cartItems = null;
      if (isOld) {
        const items = state.items.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        cartItems = [...items];
      } else {
        cartItems = [...state.items, action.payload.cartItem];
      }
      return {
        ...state,
        items: cartItems,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== action.payload.cartItemId
        ),
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const toggleCartPopup = (dispatch) => {
  return dispatch({
    type: "TOGGLE_CART_POPUP",
  });
};

export const addToCart = (dispatch, cartItem) => {
  return dispatch({
    type: "ADD_TO_CART",
    payload: {
      cartItem: cartItem,
    },
  });
};

export const removeFromCart = (dispatch, cartItemId) => {
  return dispatch({
    type: "REMOVE_FROM_CART",
    payload: {
      cartItemId: cartItemId,
    },
  });
};

export const reduceFromCart = (dispatch, cartItemId) => {
  return dispatch({
    type: "REDUCE_QUANTITY",
    payload: {
      cartItemId: cartItemId,
    },
  });
};

const CartProvider = ({ children }) => {
  const [persistedCartItems, setPersistedCartItems] = useLocalStorage(
    "cartItems",
    []
  );
  const persistedCartState = {
    isCartOpen: false,
    items: persistedCartItems || [],
  };
  const [state, dispatch] = useReducer(reducer, persistedCartState);

  useEffect(() => {
    setPersistedCartItems(state.items);
  }, [JSON.stringify(state.items)]);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export default CartProvider;
