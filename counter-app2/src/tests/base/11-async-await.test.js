import { getImagen } from "../../base/11-async-await";

describe("Prueba der async - await ", () => {
  //se usa async en la prueba por que es una promesa
  test("Debe retornar url de imagen ", async () => {
    const url = await getImagen();
    console.log(typeof url);
    //experado un cadena string
    expect(typeof url).toBe("string");
    //forzar erro
    // expect(url.includes("https://")).toBe(true);
  });
});
