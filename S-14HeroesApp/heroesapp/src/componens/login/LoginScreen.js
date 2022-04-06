import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  //Uso el customHook useNavegate
  //navegate ofrece una funcion que permite navegar a otras pantallas
  const navegate = useNavigate();

  const handlelogin = () => {
    console.log("Abro login");
    //direcciona a la ruta que se especifique manteniendo el history
    //me mando otro parametro para que replace la historia y no regrese al login
    navegate("/marvel", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handlelogin}>
        Login
      </button>
    </div>
  );
};
