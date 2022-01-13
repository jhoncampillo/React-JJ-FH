import React from "react";
import "./counter.css";
//importo el customHook
import { useCounter } from "../../Hooks/useCounter";

//CustomHooks
//Se puede reutilizar la ligica de un contador para poder reutilizarla en varios componentes
export const CounterWhitCustomHook = () => {
  //llamo el custonHook
  //y lo desestructuroi y le mendo 100 de valor inicial
  const { state: nombreState, increment, decrement, reset } = useCounter(100);

  return (
    <>
      <h1>Counter CustomHook :{nombreState}</h1>
      <hr />
      {/* Para poder que los factores funcionen hay que manejarlos con arroy function
      y el e factor va a ser de 2 en 2
      <button onClick={increment} className="btn btn-primary mx-3"> */}
      <button onClick={() => increment(2)} className="btn btn-primary ">
        +1
      </button>
      <button onClick={reset} className="btn btn-primary mx-3">
        {" "}
        Reset{" "}
      </button>
      <button onClick={() => decrement(2)} className="btn btn-primary">
        -1
      </button>
    </>
  );
};
