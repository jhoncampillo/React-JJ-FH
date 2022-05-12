import React from "react";
import "./counter.css";
import { useState } from "react";

export const CounterApp = () => {
  //const [counter, setCounter] = useState(0);
  //cambio el contenido del useState por un objeto
  // const [counter, setCounter] = useState({
  //lo desestructuro

  //const [{ counter1, counter2 }, setCounter] = useState({
  //Para poder usar un useState con un objeto  se modifica asi
  //De esta forma no se anulan los statados iniciales de los objetos
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });
  //luego lo desestructuro
  const { counter1, counter2 } = state;

  console.log(counter1, counter2);
  //{counter1: 10, counter2: 20}
  return (
    <>
      <h1>Counter1 {counter2}</h1>
      <h1>Counter2 {counter1}</h1>
      <hr />
      <button
        className="btn btn-primary mx-3"
        defaultValue={counter2}
        onClick={() => {
          setState({
            //llamo el contenido del state con el spreadoperator y lo rescribo
            //creo un acopia del estado anterior..
            ...state,
            counter2: counter2 + 1,
          });
        }}
      >
        +1
      </button>

      <button
        className="btn btn-primary mx-3"
        defaultValue={counter1}
        onClick={() => {
          setState({
            ...state,
            counter1: counter1 - 1,
          });
        }}
      >
        -1
      </button>
    </>
  );
};
