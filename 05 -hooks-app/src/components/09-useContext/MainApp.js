import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";
import { useState } from "react";

export const MainApp = () => {
  //al envolver el appRoter en el UserContex todos los hijo y nietosde este
  //van a tener acceso a las props
  //creo un valor que voy a compartir o un "value"

  //   const user = {
  //     id: 1234,
  //     name: "Jhon",
  //     email: "Camjh@hormail.com",
  //   };
  //objeto vacio al inicio
  const [user, setUser] = useState({});

  return (
    //croo un objeto vacio y mando la funcion del useState
    //proveo user y seytUser a los hijos y nietos
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  );
};
