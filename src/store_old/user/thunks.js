import { login, logout, updateUser } from "./actions";

import { api } from "../../services/api";

import toast from "react-hot-toast";

import jwt from "jwt-decode";

export const loginThunk = (userData, history) => async (dispatch) => {
  let userId;

  await api
    .post("/sessions/", userData)
    .then((response) => {
      const token = response.data.access;
      userId = jwt(token).user_id;
      localStorage.setItem("@kenzieshop:token", token);
      dispatch(login(token));
      toast.success("Login efetuado com sucesso");
    })
    .catch((error) => toast.error("Email ou senha inválidos"));

  await api.post(`/users/${userId}`).then((response) => {
    const userInfo = JSON.stringify(response.data);
    localStorage.setItem("@kenzieshop:user", userInfo);
    dispatch(updateUser(response.data));
    history.push("/cart");
  });
};

export const logoutThunk = (history) => (dispatch) => {
  dispatch(logout());
  toast.success("Você saiu :`(");
  // history.push("/");
};
