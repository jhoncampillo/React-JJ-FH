import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark  navbar-expand-sm ">
      <Link className="nav-link  text-white" aria-current="page" to="/">
        UseContext
      </Link>

      <Link className="nav-link   text-white" to="/">
        Home
      </Link>
      <Link className="nav-link  text-white " aria-current="page" to="/login">
        Login
      </Link>
      <Link className="nav-link  text-white" aria-current="page" to="/about">
        About
      </Link>
    </nav>
  );
};
