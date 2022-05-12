//inicio el reducer y le asigno un array vacio de inicio
export const todoReducer = (state = [], action) => {
  // la action generalmete se maneja con swich
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    //LLAMO EL STATE Y ADICIONO LO QUE TRAE LA ACCION
    //el estado por defecto  es el state
    case "DELETE":
      //Filter regresa un nuevo arreglo que cumpla una condicion
      //en este caso que regrese arreglo cont todos diferentes al id que se quiere borrar

      return state.filter((todo) => todo.id !== action.payload);
    //Marcar como terminado

    //Forma Corta
    case "TOGGLE":
      return state.map((todo) =>
        //si todo.id = action.payload entonces llama todo los todo y cambia el done por el contario a su valor
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    //vamos a resumir este
    case "TOGGLE-OLD":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          //...todo = estraigo todos los elementos que tenga el todo pero solo cambia el done a true
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
    //se inicializa
    // break;
  }
};
