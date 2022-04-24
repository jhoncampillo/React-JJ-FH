class Usuario {
  constructor({ nombre, apellido, edad, clave }) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.clave = clave;
  }
  saludo() {
    console.log(`Hola ${this.nombre} ${this.apellido}`);
  }
}
//estancio
const UseJhon = new Usuario({
  nombre: "Jhon Jairo",
  apellido: "Campillo Serrato",
  edad: "50",
  clave: "SDC^tthh",
});

console.log(UseJhon);

UseJhon.saludo();

class Estudios extends Usuario {
  constructor(props) {
    super(props);
    this.active = false;
    this.cursos = ["Node"];
  }
  agregarCurso(curso) {
    this.cursos.push(curso);
  }
  activarUsuario(activado) {
    this.active = activado;
  }
}

const UseJuanda = new Estudios({
  nombre: "Juan David",
  apellido: "Campilllo",
  edad: "22",
  clave: "452455",
});

UseJuanda.agregarCurso("Matematicas");
UseJuanda.activarUsuario(true);
console.log(UseJuanda);
