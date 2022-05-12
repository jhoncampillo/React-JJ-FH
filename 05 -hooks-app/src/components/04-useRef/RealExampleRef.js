import React from "react";
import { useState } from "react";
import "../../index.css";
import { MultipleCustomHooks } from "../examples/MultipleCustomHooks";

export const RealExampleRef = () => {
  ///creo el estado para mostar o ocultar el componnente

  const [show, setShow] = useState(false);

  const handleShow = () => {
    //asigno el valor opuesto de show
    setShow(!show);
  };

  return (
    <div>
      <h1>Real Example useRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}

      <button className="btn btn-primary mt-5" onClick={handleShow}>
        Show/Hide
      </button>
    </div>
  );
};
