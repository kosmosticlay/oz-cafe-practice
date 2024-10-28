import { createContext, useState } from "react";

export const cartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (options, quantity, id) => {
    setCart([...cart, { options, quantity, id }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((el) => id !== el.id));
  };

  return (
    <cartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </cartContext.Provider>
  );
}
