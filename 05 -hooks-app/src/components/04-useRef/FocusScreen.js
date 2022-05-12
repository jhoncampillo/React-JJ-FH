import React from "react";
import { useRef } from "react";

export const FocusScreen = () => {
  //Referencia Mutable que usa el useRef

  ///const ref = useRef();
  const inputRef = useRef();
  console.log(inputRef);

  //funcion para ubicar el foco del mouse
  const handleClick = () => {
    //document.querySelector("input").focus();
    // document.querySelector("input").select();
    //console.log("select");
    // con el useRef referencio lo que que se necesite en el Dom
    //y remplazo el codigo anterior
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr></hr>

      <input ref={inputRef} className="from-control" placeholder="Su nombre" />
      <button className="btn  btn-outline-primary mx-4 " onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
