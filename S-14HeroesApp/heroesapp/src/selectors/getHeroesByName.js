import { heroes } from "../data/heroes";

//le mando un espacio por defecto  por si no llega nada en el name-
//exporto al componente SearchScreen
export const getHeroesByName = (name = " ") => {
  //Para manejo de Mayusculas y Minusculas
  // name = naem.toLowerCase();
  if (name.length === 0) {
    return [];
  }
  name = name.toLowerCase();
  //retorno  de heroes
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
  //return heroes;
};
