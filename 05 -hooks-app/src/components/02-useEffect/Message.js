import React from "react";
import { useEffect, useState } from "react";

export const Message = () => {
  //vamos a imprimirlas en memoria las coordenadas en el Dom
  const [coors, setCoords] = useState({ x: 0, y: 0 });
  //Desestructuro
  const { x, y } = coors;

  useEffect(() => {
    //Cuerpo de effecto;
    console.log("Componente Montado");
    //emite la posicion del moi\use y puede llenar la mameoria
    //Puede saturar memoria por cada movimiento del mouse ocupa un espacion
    //de memoria
    const mouseMove = (e) => {
      // console.log(e);
      const coors = { x: e.x, y: e.y };
      console.log(coors);
      setCoords(coors);
    };
    window.addEventListener("mousemove", mouseMove);

    // });
    return () => {
      //cleanup-limpieza; - Remuevo el EventListener
      console.log("Componente desmontado");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []); //dependencia a escuchar
  //Pruebas
  //cuando se digita 123 en el input se muetra el componente- Componente montado
  //cuando se digita 12344 en el input se quita el componente- Componente desmontado
  //Aqui Vamos
  //useEffect Retorna una funcion
  return (
    <div>
      <h1>Eres Genial</h1>
      <p>
        {" "}
        x: {x} y:{y}
      </p>
    </div>
  );
};
