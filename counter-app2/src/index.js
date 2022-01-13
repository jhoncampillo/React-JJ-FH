//importo React para identificar Content
import React from "react";
import ReactDOM from "react-dom"; //despliegue HTML
import PrimeraApp from "./PrimeraApp";
import "./index.css";
//import PropTypes from "prop-types";
import CounterApp from "./CounterApp";

//Referencio del div en el index.html
const divroot = document.querySelector("#root");

//componente PADRE
//ReactDOM.render(<PrimeraApp saludo="Hola soy Jhon Jairo Devops" />, divroot);
ReactDOM.render(
  <>
    <PrimeraApp saludo3="Hola soy Jhon Jairo Devops" />
    <CounterApp />
  </>,
  divroot
);
