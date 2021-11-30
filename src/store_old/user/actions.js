import { LOGIN, LOGOUT, UPDATE_USER } from "./actionTypes";

export const login = (token) => ({ type: LOGIN, token });
export const logout = () => ({ type: LOGOUT });
export const updateUser = (userData) => ({ type: UPDATE_USER, userData });
