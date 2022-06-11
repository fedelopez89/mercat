import React, { useReducer, createContext, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

const reducer = (state, action) => {
  return state;
};

const CartProvider = ({ children }) => {
  const [persistedCartItems, setPersistedCartItems] = useLocalStorage(
    "cartItems",
    []
  );

  const persistedCartState = {
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
