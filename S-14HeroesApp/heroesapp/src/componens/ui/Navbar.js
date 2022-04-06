import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

//Link es un punto de anclaje para ir a otra pantall
//NavLink se utiliza para que visulamente se pueda ver ahi
//  y metre las clases
//Vresion 6  activeClassName="active" no existe

export const Navbar = () => {
  //creo una funcion para manejar el login-logout

  //uso el navegate para llegar al login al dar click en logout

  const navegate = useNavigate();

  const handleLogout = () => {
    console.log("Logout Screen");
    //al mandar el replace limpio el localstore y el JWt para que el usuario
    //no pueda regresar a la ruta anterior
    navegate("/login", { replace: true });
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

          <NavLink className="nav-item nav-link" to="/dc">
            DC
          </NavLink>
          <NavLink className="nav-item nav-link" to="/hero">
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
          <span className="nav-item nav-link text-info">Jhon Jairo</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
