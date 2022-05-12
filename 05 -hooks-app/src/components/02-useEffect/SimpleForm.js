import React from "react";
import "./effects.css";
import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  //Vamos a crera un formulario - usestate con un objeto
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  ///desestructuro para no trabajar con formStatate.name, etc

  const { name, email } = formState;

  //useeffect es un hook qu e permite ejecutar un efecto secundario cuando
  //algo ocurra en nuestro componente-- Este codigo hasta aqui.. en en la consola se repite cada que digitas algo en el input
  useEffect(() => {
    console.log("hey!");
  }, []);
  //el []de dependencias  se utiliza para que el useEffect solo se ejecute una sola vez cuando en componente tenga un cambio
  // EN ESTE CASO SOLO SE DISPARA CUANDO SE CARGA EL FORMULARIO

  // si necesitaramos ejecutar otra cosa cada que el formulario cambie
  //react recomienda hacer otro effect y la dependencia va a ser lo que
  //interesa estar escuchando en este caso formState

  useEffect(() => {
    console.log("formState Cambio");
  }, [formState]);

  //useEffect pendient de ca,mbios en el email
  useEffect(() => {
    console.log("Email Cambio");
  }, [email]);

  //UN HOOK NO SE PUEDE MANEJAR DE MANERA CODICIONAL DENTRO DE UN IF O UN  WHILE

  //creo la funcion que es llamada en el onChange del input
  //desestrituro el (e) para no usra e.target.name
  const handleInputChange = ({ target }) => {
    //console.log(target.name);
    //console.log(target.value);
    //Estruturo la funcion para el setFormState reciva es stado actual y
    //y lo remplaze por le target.name que se le asigna en target.name
    setFormState({
      ...formState,
      //computo este parametro y se asigno el target.value al target.name  qye referencia an name del input
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      {/* //creo un div y un formGroup */}
      <div className="form-group">
        <input
        
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control my-3"
          placeholder="Tu email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {/* //si name es igual a 123 y existe muetra el message */}
      {name === "123" && <Message />}
    </>
  );
};
