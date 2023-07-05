import { message } from "antd";
import React, { useReducer, useContext, createContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const newItem = action.item;
      const itemExists = state.some((item) => item.data.id === newItem.data.id);

      if (itemExists ) {
        message.error("Item is already in cart");
        return state;
      }
      return [...state, newItem];
    case "REMOVE":
      const updatedState = state.filter(
        (item) => item.data.id !== action.index
      );
      return updatedState;
    case "CLEAR":
      return [];
    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);
