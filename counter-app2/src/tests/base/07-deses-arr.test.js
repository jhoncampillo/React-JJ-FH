import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en Array", () => {
  test("Prueba 07-deses-arr.test  retorna string and number", () => {
    // const arr = retornaArreglo(); //['ABC',123]
    const [letras, numeros] = retornaArreglo();
    //expect(arr).toEqual(["ABC", 123]);
    //tambien asi - evalua de forma aletatoria
    console.log(typeof letras);
    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");
  });
});
