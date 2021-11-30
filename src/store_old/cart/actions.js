import { ADD_PRODUCT_CART, SUB_PRODUCT_CART, CLEAR_CART } from "./actionTypes";

export const addToCart = (product) => ({ type: ADD_PRODUCT_CART, product });
export const subFromCart = (product) => ({ type: SUB_PRODUCT_CART, product });
export const clearCart = () => ({type:CLEAR_CART})