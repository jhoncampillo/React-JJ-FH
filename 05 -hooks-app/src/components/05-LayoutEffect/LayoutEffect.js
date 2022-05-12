import React from "react";
//importo el useFetch
import { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
//ejecuta codigo despues que se renderiza en componente
import { useCounter } from "../../Hooks/useCounter2";
import "./layout.css";

//este hook  se dispara despues de que todas la mutaciones del DOM se hayan echo
export const LayoutEffect = () => {
  //   const state = useFetch(`https://breakingbadapi.com/api/quotes/1`);
  //   console.log(state);

  //llamo al useCounter lo desestruturo le ,menado  como paramettro inicia (1)
  // le envio el counter a la urn
  const { counter, increment } = useCounter(1);
  //console.log("Soy " + counter);

  ///desestructuro / loadin y data del url
  const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
  //console.log(loading); //esto me devuelve true o false cuando ya tengo la data
  console.log(data);

  //como inicialmente la data llega null hacemos una validacion
  //si tiene valor data(true) &&(entonces) trae la posicion [0] del array
  // la negaion de null  !null=false  La dobre negacion es True !!null=true
  const { author, quote } = !!data && data[0];

  //creo la referencia al parrafo y l aasigno al <p></p>

  const pTag = useRef();

  //creo un state para almacenbar el pTag
  const [boxsize, setBoxsize] = useState({});

  useLayoutEffect(() => {
    console.log("hey");
    console.log(pTag.current.getBoundingClientRect());
    setBoxsize(pTag.current.getBoundingClientRect());
  }, [quote]);
  //console.log(boxsize);
  //Si el quote cambia - en este caso saco las cordenadas del rectangulo referenciado
  //en este caso el Ptag
  //
  //   const handleNext = (increment) => {
  //     console.log("Siguiente Frase");
  //     u;
  //   };

  return (
    <div>
      <h1>Layout Effects</h1>
      <hr />
      {/* uso un Ternario  para que se muestre o no cuando el loading sea veraddero o falso*/}

      <blockquote className="blockquote text-center">
        <p ref={pTag} className="mb-0">
          {quote}{" "}
        </p>
        <footer className="blockquote-footer mt-2">{author}</footer>
      </blockquote>

      <pre>{JSON.stringify(boxsize, null, 3)}</pre>

      {/* Mostrar cuando noesta cargando */}

      {/* Boton para ir a la sigueinte frase o seguiente posicion de la data 
        Uso el hook useCounter2.js para  reutilizarlo
      */}
      <button className="btn btn-primary" onClick={increment}>
        Sigiente Data
      </button>
    </div>
  );
};
