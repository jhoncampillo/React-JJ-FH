import React from "react";
import { useForm } from "../../../Hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  //maneja el estado del formulario
  //mando este valor description como value al input
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return;
    }
    const newTodos = {
      id: new Date().getTime(),
      //asigno el valor del value del input
      desc: description,
      done: false,
    };
    // const action = {
    //   type: "add",
    //   payload: newTodos,
    // };

    //disparo la accion al reducer para que la mande al todoReducer
    handleAddTodo(newTodos);
    reset();
  };

  return (
    <>
      <h3>Agregar ToDo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          //name asociado con la descrition de useForm
          name="description"
          className="form-control"
          placeholder="Aprender..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-outline-primary  btn-lg mt-3 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  );
};
