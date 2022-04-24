import React from "react";
import { useMemo } from "react";
//uso hook useParams para recibir el parametro del las daslboradRoutes
import { useParams, Navigate, useNavigate } from "react-router-dom";
//import { useState } from "react";
import { getHeroesById } from "../../selectors/getHeroesByID";

export const HeroScreen = () => {
  const navegate = useNavigate();

  //creo un usestate para manejar el useMemo
  //const [counter, setCounter] = useState(0);

  //const params = useParams();
  // console.log(params);
  //lo desestructuro y saco heroeID--este parametro viene del route
  const { heroeId } = useParams();

  //creo una constate para trael el parametro del getHeroesByID
  //le asigino el parametro que captura en el link de DashBoardRoutes
  //quiero memorizar el valor y solo renerizar nuevament  si una
  //dependencia cambia uso el useMemo- se usa pa mejora rendimiento en recorrer array grandes
  const hero = useMemo(() => {
    return getHeroesById(heroeId);
    //pongo la dependencia que es la que hace que el useMemo de
    //vuelva a disparar si esta cambia.
  }, [heroeId]);

  //navegate(-1) regreso a la Pagina anterior]
  const handleReturn = () => {
    navegate(-1);
    //setCounter(counter + 1);
  };

  //creo una constate para trael el parametro del getHeroesByID
  //le asigino el parametro que captura en el link de DashBoardRoutes
  //const hero = getHeroesById(heroeId);

  //destructuring hero
  const { id, alter_ego, characters, publisher, first_appearance } = hero;

  //evaluo si el parametro no es indefane o llega vacio
  //y lo direciono a la Route '/'
  //no uso el useNavegate por que no es un funciuonal Componen
  //usa el Navegate para especificar a donde quiere que navegue
  if (!hero) {
    return <Navigate to="/" />;
  }

  const imgPath = `/Assets/${hero.id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={imgPath}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__bounce animate__backInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego :</b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher :</b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance :</b>
            {first_appearance}
          </li>
          <li className="list-group-item">
            <b>Character :</b>
            {characters}
          </li>
          <button className="btn btn-outline-info" onClick={handleReturn}>
            Regresar
          </button>
        </ul>
      </div>
    </div>
  );
};
