import React from "react";
import { Fragment } from "react/cjs/react.production.min";
//para importar prop-types
import PropTypes from "prop-types";
//imr + tab
//Funcional Component
//RECIBO LAS PROPS
const PrimeraApp = ({ saludo, subtitulo }) => {
  //console.log(props);
  //const saludo = "Hola Mundo Jhon2 React";
  //const saludo2 = [1, 2, 3, 4, 5, 6, 7];

  //Manejo de objetos
  const usuario = {
    nombre: "Jhon Jairo Campillo Serrato",
    Edad: 49,
    Profesion: "Ing  de sistemas",
  };

  //retornmo objeto al envolverlo en parentesis
  //otro fragmente : <> </>  o  <div></div> o   <Fragment>  </Fragment>
  return (
    <>
      {/* Puede pasarse como una props.saludos3 pero se usa destrusturing */}
      {/* <h1>{saludo3} </h1> */}
      {/* <pre>{JSON.stringify(usuario, null, 3)}</pre> */}
      {/* <h2>{saludo2} </h2> */}
      <h2>{saludo} </h2>
      {/* <h1>Hola Mundo React de Jhon</h1>
      <p>Primera Aplicaicon</p> */}
      <p>{subtitulo}</p>
    </>
  );
};
//defino el typo de las propiedades de este componente
PrimeraApp.propTypes = {
  //es requerido el saludo en el componente.
  saludo: PropTypes.string.isRequired,
};
PrimeraApp.defaultProps = {
  subtitulo: "Soy un Subtitulo",
};

//exporto
export default PrimeraApp;
