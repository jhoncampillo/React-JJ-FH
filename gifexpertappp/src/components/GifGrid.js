import React from "react";
//import { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";
//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

//Recibo el parametro category de GifexpertApp con Destructuring
const GifGrid = ({ category }) => {
  //creo el use state - pero sin el useEffect se ejecuta la funcion en
  //cada evento - se vuelve infinita.- se dispara cada vez que hay un cambio
  //const [images, setImages] = useState([]);

  //USO EL CUSTOM HOOKS
  //const state = useFetchGifs();
  //desestruturing-  data: images = renombra data con images
  const { loading, data: images } = useFetchGifs(category);

  ///console.log(loading);
  //console.log(data);

  //necesito recibir la categoria y hacer una peticion http

  //creo un afuncion

  //getGifs();
  //Capitalizo
  const Category = category.charAt(0).toUpperCase() + category.slice(1);
  console.log(Category);
  return (
    <>
      <h2>{Category}</h2>
      {/* //uso el Custom hooks */}
      {/* //&& si es verdadero muetras de lo contratrio no muestra nada. */}
      {loading && (
        <p className="animate__animated animate__bounceIn">Loading...</p>
      )}
      <div className="card-grid">
        {/* <h3>{count}</h3> */}

        {/* <button onClick={() => setCount(count + 1)}></button> */}

        {/* //terer en cuenta que el return implicito  va con () 
          Puedo desestructurar este map
          */}
        {/* {images.map((img) => (
          <li key={img.id}>{img.title}</li>
        ))} // Le mando el nuevo componente*/}
        {images.map((img) => (
          //   <li key={id}>{title}</li>
          <GifGridItem
            key={img.id}
            // img={img} replazo esto y mando al componente todas las propiedades de img
            //como independientes id,title,url
            {...img}
          />
        ))}
      </div>
    </>
  );
};

//Defino que el el parametro category es requerido
GifGrid.protoTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
