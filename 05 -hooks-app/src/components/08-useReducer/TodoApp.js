import React from "react";
import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";

import { TodoList } from "./TodoList";

import "./styles.css";
import { TodoAdd } from "./TodoAdd";

//estado inicial - que se le asigna a la constante todos del reducer const [todos, dispatch]

//Creo la funcion init para  remplazar el initialstate que queda comou un [] - Y
//Y SE MANJA CMO INTIALSTATE
const init = () => {
  //Recupero del LocalStorage
  //Evaluo si hay o no todos, si no hay y se deja sin evaluacion dari una respuesta de null
  //si regresa null retorna un array vacio
  return JSON.parse(localStorage.getItem("todos")) || [];
  //     {
  //       //genera un Id
  //       id: new Date().getTime(),
  //       desc: "Aprender React",
  //       done: false,
  //     },
  //   ];
};

//console.log("JJ" + initialState);
export const TodoApp = () => {
  //importo el reducer
  //initialState :  estado inicial- se cambia por un arreglo vacio []
  //init : funcion para inicializar el estate en caso de que este sea procesado
  //todoreducer: funcion reducer - hay que crearla
  //dispatch : ayuda a  poder disparar las accones al reducer y saber si hubo un cambio para renderizare
  //state:

  // const [state, dispatch] = useReducer(reducer, initialState, init)
  // inicialmente trabajamos asi la funcion se llama y lo que retorna se pasa al initialstate
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  //en nombre dentro del array puede ser cualquiera
  //console.log("todos" + todos);

  //grabacion el LocalStorage-- se graba cunado los todos cambian - uso un useEffect
  //los efectos se ejecutan una unica vez - Registra Cualquier Cambio en los todos-agregar -modifique -
  useEffect(() => {
    // effect; - Presistencia
    localStorage.setItem("todos", JSON.stringify(todos));
    return () => {
      //cleanup;
    };
  }, [todos]);

  //Delete Todo - recibo el ID
  const handleDelete = (todoid) => {
    console.log(todoid);

    //crear la accion
    const action = {
      type: "DELETE",
      payload: todoid,
    };

    //Hacer el Dispatch- refenecio el caso el el Reducer
    dispatch(action);
  };

  //Todo Completado- subrayado- nueva forma
  const handleToggle = (todoid) => {
    dispatch({
      type: "TOGGLE",
      payload: todoid,
    });
  };

  //creo funcion handelAddTodo para adicionar todos
  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "ADD",
      payload: newTodo,
    });
  };

  //Submit del Form
  //Boton del formulario
  //Esta tarea manupula el estado y debe  pasar por el reducer.
  //   const handleSubmit = (e) => {

  //     //Si el cuadro esta vacio no agrega nada
  //     if (description.trim().length <= 1) {
  //       return;
  //     }
  //     //PAYLOAD
  //     const newTodo = {
  //       //genera un Id
  //       id: new Date().getTime(),
  //       desc: description,
  //       done: false,
  //     };
  //     //Genero la accion que va al reducer
  //     //para mandarle esta ccion al reducer se usa el dispach  como segundo argumento
  //     //del usereducer de arriba
  //     const action = {
  //       type: "ADD",
  //       payload: newTodo,
  //     };
  //     //despacho la accion al useReduce para que la envie al todoReducer y se genere la nueva renderizacion del nuevo state
  //     dispatch(action);
  //     //lIMPIO EL FORM
  //     reset();
  //   };

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />

      <div className="row">
        {/* Mando los argumentos al TodoList */}
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
