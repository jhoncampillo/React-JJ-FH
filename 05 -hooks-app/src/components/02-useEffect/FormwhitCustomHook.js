import React from "react";
import "./effects.css";
import { useEffect } from "react";
import { useForm } from "../../Hooks/useForm";

export const FormwhitCustomHook = () => {
  //Vamos a crera un formulario - usestate con un objeto
  //uso el customHook
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  ///desestructuro para no trabajar con formStatate.name, etc

  const { name, email, password } = formValues;
  useEffect(() => {
    console.log("Email Cambio");
  }, [email]);

  useEffect(() => {
    console.log("Name Cambio");
  }, [name]);
  //UN HOOK NO SE PUEDE MANEJAR DE MANERA CODICIONAL DENTRO DE UN IF O UN  WHILE

  //creo la funcion que es llamada en el onChange del input
  //desestrituro el (e) para no usra e.target.name
  //   const handleInputChange = ({ target }) => {
  //     //console.log(target.name);
  //     //console.log(target.value);
  //     //Estruturo la funcion para el setFormState reciva es stado actual y
  //     //y lo remplaze por le target.name que se le asigna en target.name
  //     setFormState({
  //       ...formState,
  //       [target.name]: target.value,
  //     });
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>useEffect FormCustomHook</h1>
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

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control my-3"
          placeholder="*****"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Imprimir
      </button>
    </form>
  );
};
