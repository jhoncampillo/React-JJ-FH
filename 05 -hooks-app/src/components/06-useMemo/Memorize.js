import React from "react";
import { useState } from "react";
import { useCounter } from "../../Hooks/useCounter2";
import { Small } from "./Small";

export const Memorize = () => {
  //USO UN CUSTOMHOOK PARA EVALUAR EL HOOK
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Memorize</h1>
      <h1>
        Counter :
        <small>
          {" "}
          <Small value={counter} />
        </small>
      </h1>

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
