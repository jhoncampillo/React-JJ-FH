import React from "react";

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <li key={todo.id} className="list-group-item">
      {/* trabajo el subrayado de la tarea */}
      <p
        className={`${todo.done && "completed"}`}
        //si todo.done el verdadero aplique la clase completed
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1}. {todo.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
