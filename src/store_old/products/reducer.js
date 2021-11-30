import { productsDataBase } from "../../services/api";
import { SEARCH_PRODUCT, SHOW_ALL_PRODUCTS } from "./actionTypes";

const defaultState = productsDataBase || [];

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCT:
      const newState = [...state];
      return newState.filter((product) =>
        product.title.toLowerCase().includes(action.search.toLowerCase())
      );

    case SHOW_ALL_PRODUCTS:
      return defaultState;

    default:
      return state;
  }
};

export default productsReducer;
