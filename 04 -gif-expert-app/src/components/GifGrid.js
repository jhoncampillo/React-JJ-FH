import { useState } from "react";
import React from "react";
//recive el argumento category que viene de input del AddCategory
export const GifGrid = ({ category }) => {
  //creo el estado
  const [count, setCount] = useState(0);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Goku&limit=10&api_key=rRKAHmsjH1qgSc0SUfBItcBaut4L7DUQ";
    const respuesta = await fetch(url);
    //console.log(respuesta);
    //desetructuring solo traigo la data data.data
    const { data } = await respuesta.json();

    //la recorro con map
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      };
    });
    console.log(gifs);
  };
  getGifs();
  return (
    <div>
      <h3>{category} </h3>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}></button>
    </div>
  );
};
