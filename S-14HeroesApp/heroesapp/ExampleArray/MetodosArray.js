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

const handleSearch = (number) => {
  Heroes2.map((data) => {
    console.log(data);
  });
};

const resul = handleSearch(1500);

const carrito = [];

const articulos = {
  articulo: "TV 70 pulgadas",
  valor: 3000000,
};

const articulos2 = {
  articulo: "TV 80 pulgadas",
  valor: 4000000,
};

const articulos3 = {
  articulo: "TV 65 pulgadas",
  valor: 2000000,
};

let resultado;
//Forma de adicionar declarativa no modifica el elemento actualcon push es una forma Imperactiva
//push = adiciona al finallyl
//unshift = adicioana al inicio

resultado = [...carrito, articulos];
console.log(resultado);

resultado = [...resultado, articulos2];
console.log(resultado);

resultado = [...resultado, articulos3];
console.log(resultado);

//aliminar elemento del final del array / carrito

//carrito.pop()

//Eliminra de l Inicio

//carriro.shift()

//Eliminar de cualquir parte del array splice(posiion inicial, hastq que posicion)

//carriro.splice(1,1)

//DESTRUCTURING ARRAY

const numeros = [1, 20, 30, 50];

const [x, y, z] = numeros;

console.log(x, y, z);

const [, , x3] = numeros;
console.log(x3);

//para react - creo un array con los ultimos elementos

const [primero, ...tercero] = numeros;
console.log(tercero);

Heroes2.forEach((data) => {
  console.log(` Heroes ${data.name} , ${data.edad}`);
});

//Map - cera un arreglo nuevo
const nuevoArray = Heroes2.map((data2) => {
  console.log(` Heroes ${data2.name} , ${data2.edad}, ${data2.ide}`);
});
//console.log(nuevoArray);

//HOISTING -- JS PRIMEO REGISTRA VARIABLES Y FUNCIONES Y LUEGO EJECUTA

//fOR OF  - VALORES DE UN ARRAY
for (let dataH of Heroes2) {
  console.log(dataH);
}

//FOR IN - valores de un objeto

const Heroes3 = {
  name: "Jhon Jairo Campillo Serrato",
  Sueldo: "$8.500.000",
};

for (let propiedad in Heroes3) {
  console.log(`${Heroes3[propiedad]}`);
}
