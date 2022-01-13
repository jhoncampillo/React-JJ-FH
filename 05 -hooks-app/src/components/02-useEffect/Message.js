import React from "react";
import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    //Cuerpo deeffecto;
    console.log("Componente Montado");
    return () => {
      //cleanup-limpieza;
      console.log("Componente desmontado");
    };
  }, []); //dependencia a escuchar
  //Pruebas
  //cuando se digita 123 en el input se muetra el componente- Componente montado
  //cuando se digita 12344 en el input se quita el componente- Componente desmontado
  //Aqui Vamos
  return (
    <div>
      <h1>Eres genial</h1>
    </div>
  );
};
