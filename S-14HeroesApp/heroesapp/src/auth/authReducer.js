//un reducer es una funcion
//recive un state inicial y envia un accion
//Cuando laccion modifique el state react vuelve a dibujar los nuevos cambio

import { types } from "../types/types";
//import { LoginScreen } from "../componens/login/LoginScreen";

//creo / i\objeto initialstate

// const state = {
//   name: "Jhon",
//   logged: true,
// };

//asi luce la accion que esta en el reducer
// const loginAction = {
//   type: types.login,
//   payload: {
//     name: "JHON",
//     email: "dsdfds@gmail.com",
//   },
// };

//action.type define el y type dela accion del reducer definida en en file types.js importado
export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        //Aqui estoy esparciendo todo lo que el action.payload "name,"
        ...action.payload,
        logged: true,
      };
    case types.logouth:
      return {
        logged: false,
      };

    default:
      //si no es ningun caso regreso el state en su estado actual
      return state;
  }
};
