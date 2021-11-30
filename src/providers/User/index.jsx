import jwt from "jwt-decode";
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@kenzieshop:token");
    const user = localStorage.getItem("@kenzieshop:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  let userId;

  const signIn = async (data, history) => {
    const response = await api.post("/sessions/", data);
    const token = response.data.access;
    userId = jwt(token).user_id;
    localStorage.setItem("@kenzieshop:token", token);

    const userResponse = await api.post(`/users/${userId}`);
    localStorage.setItem("@kenzieshop:user", JSON.stringify(userResponse.data));

    setData({ token, user: userResponse.data });
    toast.success("Login efetuado com sucesso");
    history.push("/cart");
  };

  const signOut = () => {
    localStorage.removeItem("@kenzieshop:token");
    localStorage.removeItem("@kenzieshop:user");
    setData({});
    toast.success("Você saiu :`(");
  };

  return (
    <UserContext.Provider value={{ data, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
