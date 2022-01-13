import React, { useState } from "react";
import PropTypes from "prop-types";

//importo el estado
//puedo trae la props setCatecories con solo 'props'
export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState(""); //strig vacio

  //creo la funcion para capturar el evento e.target.value
  //se lo asigono al setInputValue
  //con el evento onChage cambio el contenido del input
  const handleInputChangue = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  //creo en evento enter
  const handleSubmit = (e) => {
    //quito el refresh del navegador
    e.preventDefault();
    console.log("Submit Echo");

    //avaluoo si son espcios
    if (inputValue.trim().length > 2) {
      //console.log(porsp.setCategories); asi seria con props
      //comono tengo acceso al inputValue c
      //adiciojo el inpul a los cata\s que ya hay
      setCategories((cats) => [...cats, inputValue]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChangue}
      ></input>
    </form>
  );
};
//Defino el props types requiered
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
