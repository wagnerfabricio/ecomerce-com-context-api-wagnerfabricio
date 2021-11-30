import { addToCart, subFromCart, clearCart } from "./actions";
import toast from "react-hot-toast";

export const addToCartThunk = (product) => (dispatch, getState) => {
  const { cart } = getState();
  const newCart = [...cart, product];
  localStorage.setItem("@kenzieshop:cart", JSON.stringify(newCart));
  dispatch(addToCart(product));
  toast.success("Produto adicionado ao carrinho");
};

export const subFromCartThunk = (product) => (dispatch, getState) => {
  const { cart } = getState();
  const newCart = cart.filter((cartProduct) => cartProduct.id !== product.id);

  localStorage.setItem("@kenzieshop:cart", JSON.stringify(newCart));
  dispatch(subFromCart(product));
  toast.success("Produto removido do carrinho");
};

export const clearCartThunk = () => (dispatch) => {
  localStorage.setItem("@kenzieshop:cart", JSON.stringify([]));
  dispatch(clearCart());
  // toast.success("Producos removidos com sucesso");
};
