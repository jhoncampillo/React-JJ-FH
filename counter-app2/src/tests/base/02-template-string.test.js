import { getSaludo } from "../../base/02-template-string";
//import "@testing-library/jest-dom"; Incorpora metodos del expect
//segunda prueba
describe("Pruebas de 02.template-string", () => {
  //Prueba 1
  test("Prueba en me todo saludo Importado- debe retorna Hola + nombre ", () => {
    const nombre = "Fernando";
    //estimulo
    const saludo = getSaludo(nombre);
    console.log(saludo);

    expect(saludo).toBe("Hola " + nombre);
  });

  //Prueba 2
  test("Retorna Hola Jhon si no hay argumento en nombre ", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Jhon");
  });
});
