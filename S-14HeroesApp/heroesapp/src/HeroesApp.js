import React from "react";
import { AppRouter } from "./routers/AppRouter";
import { AuthContext } from "./auth/authContext";
import { useReducer, useEffect } from "react";
import { authReducer } from "./auth/authReducer";
//import { Action } from "history";

//inicio el init del reducer
//lo manejo en el localStaorage para evaluar si existe o no
const init = () => {
  //return {
  //   logged: true,
  //   name: "Fernando Temporal",
  // };
  //si el local Storage no existe o lo borraron asigna false al logged
  //parseo el usarui que hay en el localstorage ya que este solo almacena Texto y el passe
  //lee y regresa un objeto
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const HeroesApp = () => {
  //llamo el usereducer que es que  tiene la informacion del action del  login

  //authReducer = funcion reducer- no se ejecuta
  //{} = estado inicial
  //init = Forma de unicalizar el reducer y solo se ejecta la primera vez
  const [user, dispatch] = useReducer(authReducer, {}, init);

  //para que al refrescar el navegador no se pierda el logueo del usuario
  //y cambie a falso y se borre del Nav uso el useeffect para que controle
  //los cambios  en el user
  useEffect(() => {
    if (!user) return;
    //SOLO escribe en el localStores un OJETOS COMO STRINGS
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  //aqui el AuthContext provee informaciona o toda la palicacion
  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
      <AppRouter />,
    </AuthContext.Provider>
  );
};
