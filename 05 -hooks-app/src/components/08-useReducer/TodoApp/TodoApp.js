import React, { useReducer, useEffect } from "react";
import "./styles.css";
//importo la funcion todoReducer
import { todoReducer } from "./todoReducer";
//Para trabajar el input importo el customHook useForm
import { useForm } from "../../../Hooks/useForm";
import { TodoList } from "../TodoList";
import { TodoAdd } from "./TodoAdd";

//FUNTION INIT
const init = () => {
  //   return [
  //     {
  //       id: new Date().getTime(),
  //       desc: "Aprender React",
  //       done: false,
  //     },
  //   ];
  //leo los todos gravados si no hay retorna un Array vacio
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  //creo el reducer
  //la funcion init ayuda a computar todo y ejecutar mas rapido el componente
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  console.log(todos);
  //Recibo el CustomHook Use Form
  //creo una constante que envia los parametros al useForm
  //desestrucuturo el forValues y solo traigo la descripcion

  //PARA GRAVAR EN EL LOCALSTORAGE USO UN USEEFECT
  //PARA GRAVAR CADA VES QUE LOS TODOS CAMBIEN-EN CUALQUIER MOVIMIENTO
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //console.log(description);

  //Funcion patra borrar todo
  const handleDelete = (todoId) => {
    console.log(todoId);
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };

  //MARCAR COMO COMPLETADO
  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  //creoFuncion para adicion Todos
  const handleAddTodo = (newTodos) => {
    //crao la aacion y el payload para crear el case en el todoreducer
    //mando el dispatch sin crear la accion
    dispatch({
      type: "add",
      payload: newTodos,
    });
  };

  //evento del formulario

  //console.log("Agragar un Todo");

  //Creo la nueva tarea
  //     const newTodos = {
  //       id: new Date().getTime(),
  //       //asigno el valor del value del input
  //       desc: description,
  //       done: false,
  //     };

  //     //accion para enviar a reducer
  //     // const action = {
  //     //   type: "add",
  //     //   payload: newTodos,
  //     // };
  //     //disparo la accion al reducer para que la mande al todoReducer
  //     dispatch(action);
  //     reset();
  //   };

  return (
    <div>
      <h1>Todo App({todos.length}) </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
