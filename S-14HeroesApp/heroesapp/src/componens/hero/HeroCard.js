import { Link } from "react-router-dom";

//mando las property desestructuradas
export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagePath = `Assets/${id}.jpg`;
  return (
    <div className="col">
      <div className="card my-2">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={imagePath} className="card-img-top" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h4>{superhero}</h4>
              <p>{alter_ego}</p>
              {/* evaluo si el el alter_ego es diferente al atributo characters 
                esta dondicion semeja un ternario si alter edo es diferente a character
                que muestre un parrafo
              */}
              {alter_ego !== characters && (
                <p className="text-muted">{characters}</p>
              )}

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              {/*Creo un link para ver mas informacion */}
              <Link to={`/hero/${id}`}>Mas..</Link>

              {/* <button className="btn btn-primary">Ver</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
