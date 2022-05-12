import React from "react";
import { useState, useCallback, useEffect } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //el use memo no para la rerenderiacion de un componente que maneja un objeto
  //o una funcion.

  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  //usamos el useCallBack PARA MANDAR UNA FUNCION A UN COMPONENTE HIJO
  // LA OTRA ES CON USE EFFECT Y ESTE TIENE UNA DEPENDENCAI DE UNA FUNCION
  const increment = useCallback(
    (num) => {
      //le paso la funcion Y ELIMINO LA DEPENDENCIA
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  //La segunda forma es usando useEffect
  useEffect(() => {
    //????
  }, [increment]);

  //CallbackHook tiene dos casos de usu principales
  //1- Cunto intentamos mandar una funcion  aun compo\nente hijo. en este caso
  //showIncrement
  return (
    <div>
      <h1>UseCallbackHook : {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};
