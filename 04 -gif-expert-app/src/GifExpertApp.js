//sniped rafc + tab
import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //crea acategorias

  //const categories = ["One-Punch", "Samurai X", "Dragon Ball"];usesT
  const [categories, setCategories] = useState(["One-Punch"]);

  //   const handledAdd = () => {
  //     // setcategories([...categories, "Jhon JAiro"]);
  //     //tambien se puede usar asi
  //     setcategories((cats) => [...cats, "Jhon Jairo"]);
  //     console.log(categories);
  //   };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handledAdd}>Agregar</button> */}
      <ol>
        {/* Recorro el arreglo con map  i es el key*/}
        {categories.map((category) => (
          //return "Hola Jhon, ";
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
