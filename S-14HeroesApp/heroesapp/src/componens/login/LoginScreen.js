import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  //Uso el customHook useNavegate
  //navegate ofrece una funcion que permite navegar a otras pantallas
  const navegate = useNavigate();

  //llamo el context para que quede en toda la aplicacion
  const { dispatch } = useContext(AuthContext);
  //desestructuro
  //const { dispatch } = context;

  const handlelogin = () => {
    console.log("Abro login");

    //mando el dispatch al reduce
    const action = {
      type: types.login,
      payload: { name: "Jhon Jairo" },
    };
    //al hacer el dispatch de la accion en  los componentes se ve el cambio del estado a true
    //del loggued y le pasa el nombre para colocarlos en el Navbar
    dispatch(action);

    //Paso para recordar ultima pagina en el localStorage
    const lastPath = localStorage.getItem("lastPath") || "/marvel";

    console.log(action);
    //direcciona a la ruta que se especifique manteniendo el history
    //me mando otro parametro para que replace la historia y no regrese al login
    navegate(lastPath, {
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
