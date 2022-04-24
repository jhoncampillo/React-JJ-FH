//FUNCIONES PARA MANEJAR LA DATA X ID
//busco un heroe pir Id
//para enviarlo al HeroScreen

import { heroes } from "../data/heroes";

export const getHeroesById = (id = " ") => {
  //Pruebas para usar el useMemo
  console.log("Prueba ByIdHero called");

  return heroes.find((heroe) => heroe.id === id);
};
