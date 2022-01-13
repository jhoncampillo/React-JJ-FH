import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas del Componente <GifgridItems>", () => {
  //let wrapper = shallow(<GifGridItem />);
  //mandar los proptypes
  const title = "Un titulo";
  const url = "https://loclahosts.com/";
  //mando las props al wraper del componente-
  //Subro el scope del warpper para que sea global
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  //Primer test
  test("Prueba de Mostar Correctamente GifGridItems", () => {
    //wrapper = shallow(<GifGridItem />);

    expect(wrapper).toMatchSnapshot();
  });

  //segundo test

  test("Debe de terner un parrfo con el titulo ", () => {
    //Busco el parrafo
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  //Nueba prueba
  test("Debe tener una imagen igual al  url y alt de los props ", () => {
    //busco la imagen
    const img = wrapper.find("img");
    //Observo el resultado dela busqueda con find
    console.log(img.html());
    console.log(img.props()); //prop(src) evalua una sola propeidad
    console.log(img.props().src);
    //espera que la url de ma imagen se igual a la declarada

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
  //TEST PARA BUSCAR CLASES
  test("debe tener la classname animate __backInRight", () => {
    //busco el div
    const div = wrapper.find("div");

    console.log(div.prop("classname"));
    //asigno a la const classname el valor del div.prop
    const className = div.prop("className");
    //evalue que sea true osea que exista
    expect(className.includes("animate__backInRight")).toBe(true);
  });
});
