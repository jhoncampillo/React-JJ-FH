import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

//Link es un punto de anclaje para ir a otra pantalla ancortage a href
//NavLink se utiliza para que visulamente se pueda ver ahi
//  y meter las clases
//Vresion 6  activeClassName="active" no existe

export const Navbar = () => {
  //uso el contexto para llamar el namne del login definifo el el reducer

  const { user, dispatch } = useContext(AuthContext);

  // const context = useContext(AuthContext);
  //console.log("Contexto", context);
  //desestructuro el contexto para siggnar el user.name en la barra
  //const { user } = context;
  console.log(user);

  //creo una funcion para manejar el login-logout

  //uso el navegate para llegar al login al dar click en logout

  const navegate = useNavigate();

  const handleLogout = () => {
    console.log("Logout Screen");

    //Hago el dispatch para have el logout
    const action = {
      type: types.logouth,
      //payload: { : "Jhon Jairo" },
    };
    //al hacer el dispatch de la accion en  los componentes se ve el cambio del estado a true
    //del loggued y le pasa el nombre para colocarlos en el Navbar
    dispatch(action);

    console.log(action);

    //al mandar el replace limpio el localstore y el JWt para que el usuario
    //no pueda regresar a la ruta anterior
    navegate("/login", { replace: false });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mx-2">
      <Link className="navbar-brand mx-2" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link mx-2 " + (isActive ? "active" : " ")
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link mx-2 " + (isActive ? "active" : " ")
            }
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link mx-2 " + (isActive ? "active" : " ")
            }
            to="/hero"
          >
            Hero
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link " + (isActive ? "active" : " ")
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{user.name}</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
