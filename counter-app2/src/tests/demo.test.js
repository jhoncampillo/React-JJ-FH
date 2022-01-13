//Primera prueba
//test + tab
// test("Primera prueba debe ser true ", () => {
//   const isActive = true;
//   if (isActive) throw new error("No esta activo");
// });
// describe es un agrupador general de pruebas- es opcional
describe("Pruebas de archivo demo.test.js", () => {
  test("Deben de ser iguales los dos String", () => {
    //1.//inicio
    const mensaje = "Hola Mundo";

    //2.Estimulo
    const mensaje2 = `Hola Mundo`;

    //3.Observa Comportamiento- tipo ui contenido es el mismo
    expect(mensaje).toBe(mensaje2); //comparo mensaje con mensaje2
  });
});
