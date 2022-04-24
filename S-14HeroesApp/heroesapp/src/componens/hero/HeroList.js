import React from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {
  //reecibo los heroes
  //const heroes = getHeroesByPublisher(publisher);

  //Implemento el useMemo para memorizar  renderizacion
  const heroes = useMemo(() => {
    return getHeroesByPublisher(publisher);
  }, [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 animate__animated animate__bounce">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
//{...hero} muestra los heroe en los componentes
