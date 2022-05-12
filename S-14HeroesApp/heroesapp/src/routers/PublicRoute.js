import React from "react";
import { useContext, Navigate } from "react";
import { AuthContext } from "../auth/authContext";

export const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  //valido por consola si el usuario esta loguado  o no

  //Valido si el usuario esta logueado
  //navegate componente para navegar donde quiero
  return user.logged ? <Navigate to="/marvel" /> : children;
};
