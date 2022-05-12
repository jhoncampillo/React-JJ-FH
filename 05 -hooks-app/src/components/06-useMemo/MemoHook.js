import React from "react";
import { useState, useMemo } from "react";
import { useCounter } from "../../Hooks/useCounter2";
import { Small } from "./Small";
import { procesoPesado } from "../../helpers/procesoPesado";

export const MemoHook = () => {
  //USO UN CUSTOMHOOK PARA EVALUER EL HOOK
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  //funcion de simulacion para useMemo -- esta fucnion la exporto
  //un archivo independiente a -- helpers
  //   const procesoPesado = (iteracciones) => {
  //     for (let i = 0; i < iteracciones; i++) {
  //       console.log("Ahy Vamos");
  //     }
  //     return `(iteracciones) iteracciones realizadas`;
  //   };

  //Uso el use Memo para que no se ejecute nuevanmente las interaaciones al
  //oprimir el botton show si no hay algun cambio en el state de l componente.

  //Si el counter cambia se ejecuta el Memo si no queda igual y no renderiza
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter :<small>{counter}</small>
      </h3>
      <hr />

      <p> {memoProcesoPesado} </p>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button className="btn btn-primary mx-2" onClick={() => setShow(!show)}>
        {/* //Valores boolean no semuestran por eso usa JSON */}
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
