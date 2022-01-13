import React from "react";
import { shallow } from "enzyme";
import GifexpertApp from "../GifexpertApp";

describe("Pruebas al componente GitexpertApp", () => {
  test("Debe hacer match snapshot  ", () => {
    //creo el snapshot
    const wrapper = shallow(<GifexpertApp />);

    //espero que el snapchot haga match con el wrapper
    expect(wrapper).toMatchSnapshot();
  });

  //segunda prueba que dbe de mostarar una lista de categorias

  test("Debe de mostrar lista de categorias", () => {
    const categories = ["One Punch", "Dragon Ball"];
    const wrapper = shallow(<GifexpertApp defaultCategories={categories} />);

    //evalue que haha match con el snapshot
    expect(wrapper).toMatchSnapshot();
    //evalue que el contenido del  GitGrid sea del mismo tamano que  el array de  las categories
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
