//creo el reducer recive state y action la cual

import { TodoAdd } from "../TodoAdd";

//es enviada desde el reducer por el dispach
export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    //   break; // filter regresa un nueco arreglo
    //marcado como terminado
    //TOGGLE OPTIMIZADO
    case "toggle":
      return state.map((todo) =>
      //ternario optimizado.
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    case "toggle-old":
      //barre todo el arreglo y retorna un valor ay lo sigan al state
      return state.map((todo) => {
        if (todo.id === action.payload) {
          // si el todo.id es igual a l payload
          // retorne el arreglo y al done: le cambia de true a false o viseversa
          return {
            ...todo,
            done: !todo.done,
          };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};
