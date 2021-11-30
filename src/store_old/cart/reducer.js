import { ADD_PRODUCT_CART, CLEAR_CART, SUB_PRODUCT_CART } from "./actionTypes";

const defaultState = JSON.parse(localStorage.getItem("@kenzieshop:cart")) || [];

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      return [...state, action.product];

    case SUB_PRODUCT_CART:
      return state.filter(
        (cartProduct) => cartProduct.id !== action.product.id
      );

    case CLEAR_CART:
      return [];

    default:
      return state;
  }
};

export default cartReducer;
