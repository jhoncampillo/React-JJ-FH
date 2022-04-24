import { useState } from "react";

import React from "react";

export const useForm = (initialState) => {
  //Estate que cambian el estado inicial
  const [values, setValues] = useState(initialState);

  //Reinizalizo el form
  const reset = () => {
    setValues(initialState);
  };

  const handelInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handelInputChange, reset];
};
