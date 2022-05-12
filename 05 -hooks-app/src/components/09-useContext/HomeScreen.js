import React, { useContext } from "react";
import { UserContext } from "./UserContext";
//Para usar el UserContex tendo que importar usecontext
//y crear una constante que use el contecto

export const HomeScreen = () => {
  //const userContex = useContext(UserContext);
  //deesestruturo y saco el user
  const { user } = useContext(UserContext);
  console.log("jj", user);
  return (
    <div>
      <h2>HomeScreen</h2>
      <hr />
      <pre>{JSON.stringify(user, 45, 3)}</pre>
    </div>
  );
};
