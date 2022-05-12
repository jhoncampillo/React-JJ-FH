import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

//recibo los chlidren del haigh order component Dasshboard
export const PrivateRoute = ({ children }) => {
  //uso el contexto
  const { user } = useContext(AuthContext);
  console.log(user);
  //valido por consola si el usuario esta loguado  o no

  //en este useLocarion esta toda la informacion por eso desestructuro
  //y no se pirede la ultima pagina ni en screenn no en search
  const { pathname, search } = useLocation();
  //console.log(location);
  localStorage.setItem("lastPath", pathname + search);
  //Valido si el usuario esta logueado
  //Naveate es un componente especial que permite navegar a donde yo quiera
  return user.logged ? children : <Navigate to="/login" />;
};
