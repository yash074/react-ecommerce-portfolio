import { createContext, useContext, useEffect, useReducer } from "react";
import { CartReducer, initialState } from "./CartReducer";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, initialState, (initial) => {
    const saved = localStorage.getItem("cart");
    return saved ? { ...initial, cartItems: JSON.parse(saved) } : initial;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
