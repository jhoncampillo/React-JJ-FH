//CUSTOM HOOK - Forma de estraer logica de un componente y reutlizarla de manera mas sencilla
/// Los nombres de los Custom hook empiezan con "use
//funcionan como si fueran funcional components usan efectos , reducer , contextos
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    //estado inicial arreglo vacio y una loading
    data: [],
    loading: true,
  });
  console.log("arranca");
  //ejecuta codigo de manera condicional
  //Le mando un arreglo de dependencia [],
  //Solo se jecuta la Funcion getGifs() cuando el componente es renderizado por primera vez
  //COMO SE CREO UN COMPONENETE NUEVO QUE MANEJA EL HTTPS
  //SE ADCIONAN AL useEffect otros parametros
  // se adicionael parametro de promesas .then
  // Esto se Puede remplazar por .then(setImages)
  useEffect(() => {
    //esperamos a que se ejeute la tareas
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        //cambiamos el estado
        setState({
          data: imgs,
          loading: false,
        });
      }, 3000);
    });
  }, [category]);

  //   setTimeout(() => {
  //     setstate({
  //       data: [1, 2, 3, 4],
  //       loading: true,
  //     });
  //   }, 100000);

  return state;
};
