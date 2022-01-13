//import { render } from "@testing-library/react";
import React from "react";
//import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en PrimeraApp", () => {
  //   test('Debe mostrara el mensaje "Hola soy JHon Jairo Devops" ', () => {
  //     const saludo = "Hola soy JHon Jairo Devops";
  //     //tengo que enviar la props saludo por que es requeried
  //     //el wrapper tiene mucho metodos entonses desesctructuro y uso el getByText

  //     // const wrapper = render(<PrimeraApp saludo={saludo} />);
  //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
  //     //evaluo si el porop saludo esta en el componente
  //     expect(getByText(saludo)).toBeInTheDocument();
  //   });

  //CAMBIO A PRUEBAS CON ENZYME
  test("Debe Mostrar  <PrimeraApp /> correctamente", () => {
    //Creo el saludo
    const saludo = "Hola soy JHon Jairo Devops";

    //shallow parecido al renden
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    //espero que se renderice
    //toMatchSnapshot() =  crea una imagen exacta del html como esta antes de la prueba

    expect(wrapper).toMatchSnapshot();
  });
  //Prueb apar el subtitulo
  test("Debe mostrar el  subtitulos enviado por el props ", () => {
    const saludo = "Hola soy JHon Jairo Devops";
    const subTitulo = "Soy un subtitulo";

    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subTitulo} />
    );

    //wrapper tiene toda la informacion del componente renderizado
    //el find trabaja igual; que DQS - busca el parrafo como el document,queryselector-false . - # id
    const textoParrafo = wrapper.find("p").text();
    console.log(textoParrafo);
    expect(textoParrafo).toBe(subTitulo);
  });
});

//Se instala para poder tener un snpshot renderizado de la prueba
//npm install --save-dev enzyme-to-json
