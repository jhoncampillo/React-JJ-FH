import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas de Promesas", () => {
  // le mando done al callback para terminar la prueba
  test(" getHeroeByIdAsync Debe retornar un heroeAsync ", (done) => {
    const id = 1;
    //las pruebas son sicronas y deben ser asincronas
    getHeroeByIdAsync(id).then((heroe) => {
      // expect(true).toBe(true); // por defecto las pruebas son sincronas
      //heroes[0]: primera posision del array
      expect(heroe).toBe(heroes[0]);
      //se usa para hacer pruebas  y manejar los tiempos de repspuetas de las promesas
      done();
    });
  });
  //si heroe no existe retorna el error del la promesa- debo enviar el 'done' Tareas asoncronas.
  test("Da error si no existe - dispara catch ", (done) => {
    const id = 10;
    //evaluo el error
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe");
      //comparo el error de catch con toBe
      //termona las tareas asincronas
      done();
    });
  });
});
