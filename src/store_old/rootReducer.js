import { combineReducers } from "redux";

import products from "./products/reducer";
import cart from "./cart/reducer";
import userData from "./user/reducer";

export default combineReducers({
  products,
  cart,
  userData,
});
