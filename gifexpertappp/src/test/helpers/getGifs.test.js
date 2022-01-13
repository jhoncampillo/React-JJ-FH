import React from "react";
import { shallow } from "enzyme";
import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs", () => {
  //Primera prueba evaluendo la cantidad de elementos
  //async por que es na promesa
  test("debe de traer 20 elementos ", async () => {
    //defino la constante como await llamando la funcion y el parametro
    const gifs = await getGifs("One Punch");
    //lo esperado es que traiga 20 imagenes como se definen el en APi
    expect(gifs.length).toBe(20);
  });
  w;

  //Segundo test Revisando si lleva el parametro category
  test("Evaluando parametro category ", async () => {
    //evaluo la fucnion con espacion
    const gifs = await getGifs("");
    console.log(gifs);
    //  [] retorna un arreglo vacio

    //lo esperado seria un length = 0 del array
    expect(gifs.length).toBe(0);
  });
});
