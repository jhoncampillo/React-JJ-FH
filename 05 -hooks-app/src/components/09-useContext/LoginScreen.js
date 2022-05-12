import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  console.log(setUser);

  let navegate = useNavigate();
  //let { username } = useParams();

  const usuario = {
    id: 12345,
    name: "Jhon Jairo",
  };

  const handleLogout = () => {
    console.log("Salio de la aplicacion");
    setUser({});
  };

  return (
    <div>
      <h1>LoginScreen </h1>
      <button
        onClick={() => {
          navegate("/about");
        }}
      >
        Retornar al Home
      </button>
      <button onClick={() => setUser({ usuario })}>Login usuario</button>
      <button onClick={handleLogout}>Logout usuario</button>
    </div>
  );
};
