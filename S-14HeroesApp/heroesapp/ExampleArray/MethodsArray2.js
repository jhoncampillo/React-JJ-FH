//import { heroes } from "../src/data/heroes";

const Heroes2 = [
  {
    ide: 1,
    name: "Jhon",
    edad: 50,
  },
  {
    ide: 2,
    name: "Monica",
    edad: 44,
  },
  {
    ide: 3,
    name: "JuanDa",
    edad: 22,
  },
  {
    ide: 4,
    name: "Stiven",
    edad: 28,
  },
];

const Meses = ["Enero,", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
const Meses2 = ["Noviembre", "Diciembre"];
//Buscar un mes en un array

const resultado = Meses.includes("Marzo");
console.log(resultado);
//true

//Some busca en arreglo de Objetos

const resultado2 = Heroes2.some((usuario) => {
  return usuario.name === "JuanDa";
});

console.log(resultado2);

//some en un arrglo normal

const resultado3 = Meses.some((mes) => {
  return mes === "Abril";
});
console.log(resultado3);

////FINDINDEX  - saca el index

const find = Meses.findIndex((mes) => {
  return mes === "Mayo";
});

console.log(find);

const find2 = Heroes2.findIndex((hero) => {
  return hero.name === "JuanDa";
});

console.log(find2);

//REDUCE - le paso dos parapametros uno el acumulador y otro lo que voy a acumular y el valor 0 inicial

//aCUMULA VALORES
let totalEdad = 0;

let resultadoEd = Heroes2.reduce((total, edades) => total + edades.edad, 0);
console.log(resultadoEd);

//Filter - crea un nuevo array basado en el parametro de busqueda

let resultadoHr = Heroes2.filter((edadMayor) => edadMayor.edad > 20);
console.log(resultadoHr);

//Traer todo menus uno
let resultadoHrr = Heroes2.filter((edadMayor) => edadMayor.edad !== 50);
console.log(resultadoHrr);

//Find   extare doto el objeto de un array de objetos

let respuesta = "";

//Seria asi sin find
Heroes2.forEach((hero, index) => {
  if (hero.name === "Jhon") {
    respuesta = Heroes2[index];
  }
});

console.log(respuesta);

//Con find

let respuesta2 = Heroes2.find((hero1) => hero1.name === "Stiven");
console.log(respuesta2);
// { ide: 1, name: 'Jhon', edad: 50 }
// { ide: 4, name: 'Stiven', edad: 28 }

///Every - deben cumplir todos los objetos del array la condicion para que sea true

const respons = Heroes2.every((heroedad) => heroedad.edad > 45);
console.log(respons);
//false

//Concat Array

let meses3 = Meses.concat(Meses2);
console.log(meses3);

//con spredoperator
const spreedMeses = [...Meses, ...Meses2];
console.log(spreedMeses);

//Adicoinar con spred .. no modifica arreglo original

const meses4 = [...Meses2, "Octubre"];

//programacion funcional la idea es no modificar los array originales.
//push si modifica el array original
