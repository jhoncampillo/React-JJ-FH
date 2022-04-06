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

// const Data = () => {
//   setTimeout(async () => {
//     try {
//       const getHeroe = await Heroes2;
//       console.log(getHeroe);
//     } catch (err) {
//       console.log(err);
//     }
//   }, 2000);
// };

// Data();

const getData = async () => {
  setTimeout(async () => {
    try {
      const getHeroe = await Heroes2;
      console.log(getHeroe);
    } catch (error) {
      console.log(String(error));
    }
  }, 2500);
};

getData();
