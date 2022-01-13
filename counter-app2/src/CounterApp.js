import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { useState } from "react";

const CounterApp = ({ value = 100 }) => {
  //Hook

  // const state = useState("Goku");
  // console.log(state);
  //hook tiene paerametro y funcion
  const [counter, setCounter] = useState(value); //retorna un arreglo con dos valores
  //console.log(nombre, setNombre);

  //Funcion del +1
  //handledAdd

  const handleAdd = () => {
    //console.log(e);
    //Uso el segundo parametro del Hook
    setCounter(counter + 1);
    //Otra manera de manejar el setCounter = setConter((c)=> c+1 )
    //el (e)pasa como primer argumento de la funcion y se puede ahorrar codigo
    //onClick={(e) => { handleAdd(e);}}- se cambia por llo que quedo en evento onClick
  };

  const handleReset = () => setCounter(value);

  const handleSubstrac = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubstrac}>-1</button>
    </>
  );
};
//Props son los parametros que se envian enttre componentes.
//puede ser opbligatorios .isRequired-rafcp
CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;

//sniped rafcp + tab = Crea todo el marco del Componente.+ popTypes
