//import { Heroes } from "./data1/Heroes";

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

//console.log(Heroes2);

// const getHeroe = () => {
//   return new Promise((resolve, reject) => {
//     const getdata = Heroes2;
//     //throw new Error();
//     setTimeout(() => {
//       if (getdata) {
//         resolve(getdata);
//       } else {
//         reject("Problemas");
//       }
//     }, 2000);
//   });
// };

// getHeroe()
//   .then((getdata) => console.log(getdata))
//   .catch((error) => console.log(" Se Metio por el Catch", error))
//   .finally(() => console.log("Promesa Lista"));

//Nueva promesa
const getHeroe = () => {
  return new Promise((resolve, reject) => {
    const getDataHeroe = Heroes2;
    setTimeout(() => {
      if (getDataHeroe) {
        resolve(getDataHeroe);
      } else {
        reject("Error No documentado");
      }
    }, 2500);
  });
};

getHeroe()
  .then((getDataHeroe) => console.log(getDataHeroe))
  .catch(() => console.log("Error del Catch"))
  .finally(() => console.log("Promesa termino"));
