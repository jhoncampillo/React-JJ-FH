import React from "react";
//importo el useFetch
import { useFetch } from "../../Hooks/useFetch";
//lo importo del CustomHook
import { useCounter } from "../../Hooks/useCounter2";

export const MultipleCustomHooks = () => {
  //   const state = useFetch(`https://breakingbadapi.com/api/quotes/1`);
  //   console.log(state);

  //llamo al useCounter lo desestruturo le ,menado  como paramettro inicia (1)
  // le envio el counter a la urn
  const { counter, increment } = useCounter(1);
  //console.log("Soy " + counter);

  ///desestructuro / loadin y data del url
  const { loading, data } = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  );
  console.log(loading); //esto me devuelve true o false cuando ya tengo la data
  console.log(data);

  //como inicialmente la da ta llega null hacemos una val;idacion
  //si tiene valor data(true) &&(entonces) trae la posicion [0] del array
  // la negacion de null  !null=true  La doble negacion es False !!null=False
  //si es cierto regres la posicion 0 del array
  const { author, quote } = !!data && data[0];

  //
  //   const handleNext = (increment) => {
  //     console.log("Siguiente Frase");
  //     u;
  //   };

  return (
    <div>
      <h1>LayoutEffects</h1>
      <hr />
      {/* uso un Ternario  para que se muestre o no cuando el loading sea veraddero o falso*/}

      {loading ? (
        <div className="alert alert-info text-center">Loading.....</div>
      ) : (
        <blockquote className="blockquote text-center">
          <p className="mb-0">{quote} </p>
          <footer className="blockquote-footer mt-2">{author}</footer>
        </blockquote>
      )}
      {/* Mostrar cuando no esta cargando */}

      {/* Boton para ir a la sigueinte frase o seguiente posicion de la data 
        Uso el hook useCounter2.js para  reutilizarlo
      */}
      <button className="btn btn-primary" onClick={increment}>
        Sigiente Data
      </button>
    </div>
  );
};
