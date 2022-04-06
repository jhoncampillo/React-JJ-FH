//FUNCIONES PARA MANEJAR LA DATA X  PUBLICHER
//ESTE COMPONENTE ME ALIMENTA EL HEROlIST
import { heroes } from "../data/heroes";
//De la data saco el campo Publisher

export const getHeroesByPublisher = (publisher) => {
  //filtro los heros que el filtro coincida con el publisher
  const validPublisher = ["DC Comics", "Marvel Comics"];
  //valido si el publisher que envio esta dento de los perimitidos
  //de lo contratio sac aun erro
  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} is not valid publisher`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
  // console.log();
};
