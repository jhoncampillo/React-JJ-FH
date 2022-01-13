//Pruebas de AddCategory
import React from "react";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
//Autocompletado
import "@testing-library/jest-dom";
//Importo para simular datos
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifGridItem } from "../../components/GifGridItem";
//uso el jest para la simulacion o fingir
jest.mock("../../hooks/useFetchGifs");

//INICIO DE PRUEBAS
describe("Pruebas al componente <GifGrid/>", () => {
  //simulo el parametro
  const category = "One Punch";

  //Primera Prueba
  test("Componente haga Match con el SnapShot ", () => {
    //simulo el retorno de los datos  que inicialmentee en el componente
    //un arreglo vacio data:[] y y loaging:true
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    //creo el snapShot
    const wrapper = shallow(<GifGrid category={category} />);
    //Comparo el wrapper con el snapShot
    expect(wrapper).toMatchSnapshot();
  });

  //prueba cunado el useFectch carga la informacion
  test("Debe mostar items cuando se carga  imagenes usefetchs", () => {
    //Mook Fomjir -falcear como si el componente tuibiera informacion
    //probar como si el customHook regreso la Informacion cuando y la  cargo
    //importo el useFetchsGifs pero n o lo llamo
    //creo el snapShot

    //CREO UN OBJETO CON LOS DATOS DE RESPUESTA
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/xxxx/",
        title: "Cualquier Titulo para prueba",
      },
      {
        id: "HDGDG",
        url: "https://localhost/",
        title: "Cualquier Titulo2 para prueba",
      },
    ];
    console.log(gifs);
    //reasigno los datos de gifs con los que simulo un respuesta
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    //que esperaria
    expect(wrapper).toMatchSnapshot();
    //Comentamois este Snapshot para mejorar la prueba

    //si el parrafo no existe es por que el loading esta en false
    //es expect evalua si el parrafo existe
    expect(wrapper.find("p").exists()).toBe(false);

    //evaluo si el componente GigGridItem existe-
    //Miro la cantidad de lementos y los comparo con los elementos del gifs
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);

    //ESTA PRUEB AEVALUA EL SNAPCHOT LOS ELEMENTOS QUE RENDERIZA
  });
});
