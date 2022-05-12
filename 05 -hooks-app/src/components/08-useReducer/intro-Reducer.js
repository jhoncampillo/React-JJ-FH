
//Primer video de useReducer
console.log("Hola Mundo");
const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

//Un reducer siempre devuelce un nuevo estado
//se le envia  un state y una accion  que es la que modifica el satate

const todoReducer = (state = initialState, action) => {
  //aqui ya agrego el nuevo todo mandado de abajo
  //? si tiene algun valo haga si no no hace nada-null - indefine
  if (action?.type === "agregar") {
    //le envio el estado actual mas accion con el payload que tiene el newTodo
    //pero se le pone signo de interogacion por que la accion.type  biene vacia inicailmente y daria error
    return [...state, action.payload];
  }
  //aunque no se haga nada siempre hay que regresar un state
  return state;
};

let todos = todoReducer();
console.log(todos);

//adicionar un nuevo todo
const newTodo = [
  {
    id: 2,
    todo: "Comprar Queso",
    done: false,
  },
];

//asigon el nuevo Todo

//La accion el es parametro que modifica el state
//siempre debe de llevar un type: parq que es la accion- "adicionar, borrar"
//el payload es un standar  para saber los argumentos que se le mandan a ala accion
const agregarTodoAction = {
  type: "agregar",
  payload: newTodo,
};

//adiciono el todo mandando la accion
todos = todoReducer(todos, agregarTodoAction);

console.log(todos);
