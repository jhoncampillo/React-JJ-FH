import React from "react";

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <li className="list-group-item" key={todo.id}>
      <p
        onClick={() => handleToggle(todo.id)}
        className={`${todo.done && "completed"}`}
      >
        {index + 1}- {todo.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
