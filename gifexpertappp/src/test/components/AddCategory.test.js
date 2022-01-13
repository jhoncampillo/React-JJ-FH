//Pruebas de AddCategory
import React from "react";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";
//Autocompletado
import "@testing-library/jest-dom";

describe("Pruebas de  <AddCategory/>", () => {
  //Prueba 1 snapshopt

  //como el componente recibe una fucnion como required  temporalmente la vamos a crear

  //const setCategories = () => {}; la combio por:
  const setCategories = jest.fn();
  //asi  puedo saber como fue llamada - cuantas veces -por quien fue llamada

  //cambio   const Wrapper = shallow(<AddCategory setCategories={setCategories} />);
  //esta doble inicailizacion del warpper es para que la ayuda no desaparezca
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  //Ciclo de Vida
  beforeEach(() => {
    //limpio todas las simulaciones
    jest.clearAllMocks();
    //metro el warpper pero le cambio "const "por "let"
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe de mostarse Correctamente ", () => {
    //defino el wrapper
    //const Wrapper = shallow(<AddCategory setCategories={setCategories} />);

    //esperado que sea igual a snapshot
    expect(wrapper).toMatchSnapshot();
  });

  //Prueba de evaluar cambion en la caja de Texto
  test("Evaluar  cambios en la caja de texto", () => {
    //Busco el Input en el jsx
    const input = wrapper.find("input");

    const value = "Hola Mundo";
    //simulo un cliclik con enzyne -  nose necesita Onclick - si no change
    //tengo que evaluar el evento.target.value que se evalua en el componente -
    //para eso creo una const arriba llamda value - liego creo el objeto
    //dentro del input,  {target:{value}}
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  //Prueb del Submit

  test("No debe de postear la informacion onSubmit", () => {
    //busco en le wrapper el form y simulo el OnSubmit y le ,ando el preventDefault
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    //como tengo el inpul vacio la funcinio no se debe  llamar - se evalua eso
    //como el inputValue trae un valor .. tengo que menter el value dentro de
    //de un beforeEach - cilo de vida  en la parate superior
    expect(setCategories).not.toHaveBeenCalled();
  });

  //Otra Prueba para llamar setcategories y limpiar caja de texto
  //simula input changue- simular Submit - setCAtegories llamado
  //y el valor del input debe estar vacio
  test("Evaluar llamado setCategories, Simular Submit- InputChange -input vacio", () => {
    //valor para pruebas - mando el value
    const value = "Hola Mundo";
    // setCategories();
    //avaluao el Onchangue  evaluo el que el input no este vacio
    wrapper.find("input").simulate("change", { target: { value } });
    //simulo el submit - envio el value- e invovo la funcion setCategories
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    //evaluo llmados de la function
    expect(setCategories).toHaveBeenCalled();
    // que se llame 1 vez
    expect(setCategories).toHaveBeenCalledTimes(1);
    //Que se llame como una funcion
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    //limpiar caja de texto
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
