import React from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  //reecibo los heroes
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="row rows-cols-1 row-cols-md-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
//{...hero} muestra los heroe en los componentes
