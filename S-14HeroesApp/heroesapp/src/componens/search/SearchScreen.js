import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
//Intalo el query-String y lo importo
import queryString from "query-string";
import { useMemo } from "react";

export const SearchScreen = () => {
  //creo la navegacion de la busqueda
  ///lo mando al handleSearched

  const navigate = useNavigate();

  //Paramanejar los query necesito sabr la localizacion y para eso manejamos
  //el useLocation -- Lee todo los datos de la location actual
  //.search sale despues de instalar query-string
  const location = useLocation();
  console.log(location.search);

  //llamo el querystrung
  const { q = "" } = queryString.parse(location.search);
  //console.log(query); //Este Log genera error

  //importo el selector de getHeroesByName para filtrar por name
  //const heroesFilted = getHeroesByName(q);

  //const heroesFilted = useMemo(q);
  //console.log(heroesFilted);

  //Como el state del imput cambia cada ves que se digita algo usamos useMemo

  const heroesFilted = useMemo(() => {
    return getHeroesByName(q);
    //pongo la dependencia que es la que hace que el useMemo de
    //vuelva a disparar si esta cambia.
  }, [q]);

  const [formValues, handelInputChange, reset] = useForm({
    //le mando el estado inicial del formualrio usando el Hook
    searchText: q, //al pasarle el "q" del query al estado inical del form al actulizar no se borra el contenido del input
  });
  //desestructuro el serachtext del useForm para trabajarlo mejor
  const { searchText } = formValues;

  //console.log(location.search); //?q=%20Batman
  // {pathname: '/search', search: '?q=%20Batman', hash: '', state: null, key: 'xy2f6h6g'}
  // hash: ""
  // key: "xy2f6h6g"
  // pathname: "/search"
  // search: "?q=%20Batman"
  // state: null
  // [[Prototype]]: Object

  const handleSearched = (e) => {
    e.preventDefault();
    console.log(searchText);
    navigate(`?q=${searchText}`);
    //http://localhost:3000/search?q=%20batman
  };

  return (
    <>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearched}>
            <input
              type="text"
              placeholder="Buscar un Heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              // viene del useForm
              onChange={handelInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados de Filtro</h4>
          <hr />
          {
            //evaluo si el query sta vacion  - && es un and igual al ternario
            //si el q esta vacio ....de lo contrario si hero.. =0 - alert no hay resul;tado///
            q === "" ? (
              <div className="alert alert-info">Buscar un Heroe</div>
            ) : (
              heroesFilted.length === 0 && (
                <div className="alert alert-danger">No hay resultado :{q}</div>
              )
            )
          }

          {heroesFilted.map((hero) => (
            //retorno el Herocard - pilas con las { } y los () del .map
            <HeroCard
              key={hero.id}
              //desestructuro todos los valores del heroe para mandalos
              {...hero}
            />
          ))}
        </div>
      </div>
    </>
  );
};
