import React from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export const Aboutscreen = () => {
  const { user, setUser } = useContext(UserContext);
  setUser({});

  return (
    <div>
      <h2>Aboutscreen</h2>

      <hr />
      <p>{JSON.stringify(user, null, 3)}</p>
    </div>
  );
};
