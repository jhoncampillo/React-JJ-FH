const Heroes3 = [
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

const Exampel2 = () => {
  return new Promise((resolve, reject) => {
    const data = Heroes3;
    setTimeout(() => {
      if (data) {
        resolve(data);
      } else {
        reject("Error al consultar");
      }
    }, 2500);
  });
};

Exampel2()
  .then((data) => console.log(data))
  .catch((err) => console.warn("Error el la Promesa"))
  .finally(() => console.log("promesa Termino"));
