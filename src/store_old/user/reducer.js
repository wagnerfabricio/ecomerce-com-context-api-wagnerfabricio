import { LOGIN, LOGOUT, UPDATE_USER } from "./actionTypes";

const user = JSON.parse(localStorage.getItem("@kenzieshop:user")) || {};
const token = localStorage.getItem("kenziestore:token") || "";

const defaultState = { token: token, user: user };

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.token };

    case LOGOUT:
      return { token: "", user: "" };

    case UPDATE_USER:
      return { ...state, user: action.userData };

    default:
      return state;
  }
};

export default userReducer;
