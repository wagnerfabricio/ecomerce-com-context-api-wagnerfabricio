import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const newCart = [...cart, item];
    localStorage.setItem("@kenzieshop:cart", JSON.stringify(newCart));
    setCart(newCart);
    toast.success("Produto adicionado ao carrinho");
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((cartProduct) => cartProduct.id !== item.id);
    localStorage.setItem("@kenzieshop:cart", JSON.stringify(newCart));
    setCart(newCart);
    toast.success("Produto removido do carrinho");
  };

  const cleanCart = () => {
    setCart([]);
    localStorage.removeItem("@kenzieshop:cart")
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, cleanCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
