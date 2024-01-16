import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("shoppingCart", []);
  const addItem = (item) => {
    setCart([...cart, item]);
    // verilen itemi sepete ekleyin
  };
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartContext = createContext();
export default CartContextProvider;
