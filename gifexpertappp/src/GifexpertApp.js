import React from "react";
import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifexpertApp = ({ defaultCategories = [] }) => {
  // const categories = ["OnePunch", "SamurayX", "Dragon Ball"];
  //le envio el  parametro por default al state
  const [categories, setCategories] = useState(defaultCategories);
  //const [categories, setCategories] = useState(["One Punch"]);

  //   const handleAdd = () => {
  //     //De ambas formas  se actualiza el Array de catgories
  //     //setCategories([...categories, "HunterXHunter"]);
  //     setCategories((cats) => [...cats, "HunterXHunters"]);
  //   };

  return (
    <div>
      <h1>GifExpertApp</h1>
      {/* le mando el parametro setcategories al compoenete por referencia 
      para poder cambier ael estado y adicionra categories */}
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {/* //recorro el estado inicial de array Usestate */}
        {categories.map((category) => (
          //<li key={category}> {category}</li> // lo remplazo por el Componente GifGrid
          <GifGrid key={category} category={category} />
        ))}
        {/* //mando categories del useState l componente GifGrid
         // referencio los id con key que es necesario - No puede ser el
        index y debe de ser unico
        //como es una funcion de flecha que solo regresa un elemento 
        // se puede obiar la llave de arriba  quito el return y envolver en parentesis
        //para indicar esta retornndo un objeto
        // return <li key={category}> {category}</li> */}
      </ol>
    </div>
  );
};

export default GifexpertApp;
