import { getHeroeById } from "../../base/08-imp-exp";
import { getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Prueba en Funciones de Heroes", () => {
  //PRUEBA 1
  test("Debe de retornar un Heroe", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    console.log(heroe);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });
  //PRUEBA 2
  test("Debe de retornar Undefine si  un id-Heroe no existe ", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    //console.log(heroe);

    //const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toBe(undefined);
  });
  //Tarea - PRUEBA 3
  test("Retrona el Owner 'DC' ", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    const heroesData = heroes.filter((ow) => ow.owner === owner);
    console.log(heroesData);
    expect(heroes).toEqual(heroesData);
  });
  //Otra prueba
  test("Retrona el Owner 'Marvel'  x 2", () => {
    const owner = "Marvel";
    const heroeOwner = getHeroesByOwner(owner);
    //MIDO EL LARGO DEL ARREGLO
    expect(heroeOwner.length).toBe(2);
  });
});
