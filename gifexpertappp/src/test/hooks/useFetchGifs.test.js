import React from "react";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";
//importo esta nueva libreria despues de instalar el testing

//como no se renderiza nada so se hace match con  el snapshot

//pa la pruebas de customhooks hay que instalar: npm install --save-dev @testing-library/react-hooks

describe("Pruebas al al customHook  useFetchGifs", () => {
  test("Debe de retornar el estado Inicial ", async () => {
    //Definidos y desestructurados con el nuevo hook - se puede tomar como standar para test hook
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );
    const { data, loading } = result.current;
    //traigo el estado inicial del componente GifGrid
    //  const { loading, data: images } = useFetchGifs(category);
    console.log(loading, data);

    //esperar que se actualice - hay ponerele el timeout si no sale error
    await waitForNextUpdate({ timeout: 5000 });
    //Retorna un array vacio y el loading en true
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  ///Segunda prueba

  test("Debe de retornar un array de Imgs y el  loading en false", async () => {
    //Preparo el Hook - con una nuevas structura
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );
    // - hay ponerele el timeout si no sale error
    await waitForNextUpdate({ timeout: 5000 });
    const { data, loading } = result.current;
    //traigo el estado inicial del componente GifGrid
    //  const { loading, data: images } = useFetchGifs(category);
    console.log(loading, data);

    //Retorna un array vacio y el loading en true
    expect(data.length).toBe(20);
    //cuando tiene datos el array el loading es false
    expect(loading).toBe(false);
  });
});
