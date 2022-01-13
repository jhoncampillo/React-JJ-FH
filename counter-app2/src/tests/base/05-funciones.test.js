import { getUsuarioActivo } from "../../base/05-funciones";
import { getUser } from "../../base/05-funciones";

describe("Prueba 05-funciones", () => {
  test("Debe de retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    // console.log(user);
    //toEqual  = se usa para comparar objetos
    expect(user).toEqual(userTest);
  });

  //otra prueba
  test("Comparar Usuario Activo Jhon Jairo", () => {
    //Funcion a evaluar
    const userActiv = {
      uid: "ABC567",
      username: "Jhon Jairo",
    };
    //Estumulo
    const user = getUsuarioActivo("Jhon Jairo");
    console.log(user);
    //esperado
    expect(userActiv).toEqual(user);
  });
});
