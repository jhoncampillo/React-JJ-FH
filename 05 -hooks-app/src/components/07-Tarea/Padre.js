import React from "react";
import { Hijo } from "./Hijo";
import { useState, useCallback } from "react";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  //   const incrementar = (num) => {
  //     setValor(valor + num);
  //   };

  //use Callback para quitar el reRender
  const incrementar = useCallback(
    (num) => {
      //le paso la funcion -quito dependencia
      setValor((c) => c + num);
    },
    [setValor]
    //dependencia
  );

  return (
    <div>
      <h1>Padre</h1>
      <hr />
      <p>Total : {valor}</p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
    </div>
  );
};
