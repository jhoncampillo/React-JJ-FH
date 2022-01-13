//import { render } from "@testing-library/react";
import React from "react";
//import "@testing-library/jest-dom";
import { shallow } from "enzyme";
//import PrimeraApp from "../PrimeraApp";
import CounterApp from "../CounterApp";

describe("Pruebas en Counter App", () => {
  //defino el wrapper general
  //definido assi para que no se desative al intelligence.. ose ayuda de comandos
  let wrapper = shallow(<CounterApp />);

  //ciclo de vida de las pruebas-  la prueba se realizan en orden
  //Reinicio el wrapper para que en todas la pruebas quede
  //con los datos originales del componente.
  //antesdeTodas
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  //PRIMER TEST
  test("Mostrar el ConterApp Correctamente ", () => {
    const wrapper = shallow(<CounterApp />);

    //Hacer mach con el snapShot
    expect(wrapper).toMatchSnapshot();
  });

  //Test evaluando Prop=100
  test("Debe hacer mach con el snapchot y devolver 100", () => {
    //creo la evaluacion
    // const value = 101;

    //Creo el wrappper que renderiza en snapshot
    const wrapper = shallow(<CounterApp value={100} />);

    //Capturo el h2 y su valor en el DOM - trim() borra espacios
    const numberValue = wrapper.find("h2").text().trim();
    console.log(numberValue);
    expect(numberValue).toBe("100");
  });

  //test botones
  test("debe imcrementar el boton +1", () => {
    //trabajo con el wrapper del describe - at.(0) - button indice 0
    //const wrapper = shallow(<CounterApp />);
    //Simulo el click
    wrapper.find("button").at(0).simulate("click");
    //console.log(btn1.html());
    //Busco el h2 y el test que tiene sin espacios
    const numberValue = wrapper.find("h2").text().trim();
    console.log(numberValue);
    expect(numberValue).toBe("101");
  });

  // probar el boton -1
  test("debe decrementar el boton -1", () => {
    //trabajo con el wrapper del de-scribe - at.(0) - button indice 0
    //const wrapper = shallow(<CounterApp />);
    //Simulo el click
    wrapper.find("button").at(2).simulate("click");
    //console.log(btn1.html());
    //Busco el h2 y el test que tiene sin espacios
    const numberValue = wrapper.find("h2").text().trim();
    console.log(numberValue);
    expect(numberValue).toBe("99");
  });

  //Probar Reset
  test("Probar el reset - poner el Counter al valor inicial ", () => {
    const wrapper = shallow(<CounterApp value={105} />);
    //simulo eventos clik delos botones
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(0).simulate("click");
    //simulo evento reset de  los botones
    wrapper.find("button").at(1).simulate("click");

    const numberValue = wrapper.find("h2").text().trim();
    console.log(numberValue);
    expect(numberValue).toBe(105);
  });
});
