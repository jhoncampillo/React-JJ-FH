import React from "react";
//uso hook para recibir el parametro del las daslboradRoutes
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesByID";

//no uso el useNavegate por que no es un funciuonal Componen
//usa el Navegate para especificar a donde quiere que navegue

export const HeroScreen = () => {
  const navegate = useNavigate();

  const handleReturn = () => {
    navegate(-1);
  };

  //const params = useParams();
  // console.log(params);
  //lo desestructuro y saco heroeID
  const { heroeId } = useParams();

  //creo una constate para trael el parametro del getHeroesByID
  //le asigino el parametro que captura en el link de DashBoardRoutes
  const hero = getHeroesById(heroeId);

  //destructuring hero
  const { id, alter_ego, characters, publisher, first_appearance } = hero;

  //evaluo si el parametro no es indefane o llega vacio
  //y lo direciono a la Route '/'
  if (!hero) {
    return <Navigate to="/" />;
  }

  const imgPath = `/Assets/${hero.id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imgPath} alt={hero.superhero} className="img-thumbnail" />
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
