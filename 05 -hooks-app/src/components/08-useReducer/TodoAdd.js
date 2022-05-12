import React from "react";
import { useForm } from "../../Hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  //Para capturar el valor del Input uso un customHook {useForm} ya definido - lo import
  //recibe como atgumento {description:""} un string Vacio. que es en name:"description " del input
  //desestructuro el retur del useForm
  //const [formValues, handleInputChange] = useForm({
  //desestructuro el formValue y saco la desciption
  //reset : para limpiar el formulario

  //el return del todReucer - tRABAJANDO CON EL HOOK USEFORM
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  console.log(description);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Si el cuadro esta vacio no agrega nada
    if (description.trim().length <= 1) {
      return;
    }
    //PAYLOAD
    const newTodo = {
      //genera un Id
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    //Genero la accion que va al reducer
    //para mandarle esta accion al reducer se usa el dispach  como segundo argumento
    //del usereducer de arriba
    const action = {
      type: "ADD",
      payload: newTodo,
    };
    //despacho la accion al useReduce para que la envie al todoReducer y se genere la nueva renderizacion del nuevo state
    handleAddTodo(newTodo);
    //lIMPIO EL FORM
    reset();
  };

  return (
    <>
      <h4>Agregar ToDo</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Aprender ..."
          autoComplete="off"
          className="form-control"
          value={description}
          onChange={handleInputChange}
        ></input>
        <button
          className="btn btn-primary btn-lg  btn-block mt-1 on"
          type="submit"
        >
          Agregar ToDo
        </button>
      </form>
    </>
  );
};
