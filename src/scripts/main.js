//Ejercicio1

function suma() {
  let Numero1 = 30;
  let Numero2 = 20;

  return Numero1 + Numero2;
}

console.log(`La suma de los dos números es ${suma()}`);

//Ejercicio2

function promedio() {
  let NotaMatematica = 16;
  let NotaLenguaje = 15;
  let NotaEconomia = 14;
  let NotaHistoria = 13;

  return (NotaMatematica + NotaLenguaje + NotaEconomia + NotaHistoria) / 4;
}

console.log(`El promedio de los cursos que tiene el alumno es ${promedio()}`);

//Ejercicio3

function areaRectangulo() {
  let baseDelRectangulo = 4;
  let alturaDelRectangulo = 2;

  return baseDelRectangulo * alturaDelRectangulo;
}

console.log(`El área del rectángulo es ${areaRectangulo()}`);

//Ejercicio4

function areaTriangulo() {
  let baseDelTriangulo = 5;
  let alturaDelTriangulo = 3;

  return (baseDelTriangulo * alturaDelTriangulo) / 2;
}

console.log(`El área del triángulo es ${areaTriangulo()}`);

//Ejercicio5

function areaCircunferencia() {
  let radioDeCircunferencia = 2;

  return Math.PI * radioDeCircunferencia ** 2;
}

console.log(`El área de la circunferencia es ${areaCircunferencia()}`);

//Ejercicio6

function sueldoTrabajdorSemanal() {
  let horasTrabajadas = 20;
  let salarioPorHora = 10;

  return salarioPorHora * horasTrabajadas;
}

console.log(`El sueldo semanal del trabajador es ${sueldoTrabajdorSemanal()}`);

//Ejercicio7

function telasEnPulgadas() {
  let telasEnMetros = 100;

  return telasEnMetros / 0.0254;
}

console.log(`La cantidad de telas en pulgadas es ${telasEnPulgadas()}`);

//Ejercicio8

function conversionADolares() {
  let cantidadDeSoles = 50000;

  return cantidadDeSoles / 3.51;
}

console.log(`Importador usted tiene ${conversionADolares()} en dólares`);

//Ejercicio9

function EdadPostulante() {
  let añodeNacimientoPostulante = 1991;

  return 2020 - añodeNacimientoPostulante;
}

console.log(`La edad del postulante es ${EdadPostulante()} años`);

//Ejercicio10

function NombreYEdad() {
  let persona1 = {
    name: "Daniel",
    age: 21,
  };

  let persona2 = {
    name: "Arthur",
    age: 24,
  };

  let persona3 = {
    name: "Alexander",
    age: 26,
  };

  if (persona1.age < persona2.age && persona1.age < persona3.age) {
    console.log(
      `La persona con menor edad es ${persona1.name} y tiene ${persona1.age} años`
    );
  }
  if (persona2.age < persona1.age && persona2.age < persona3.age) {
    console.log(
      `La persona con menor edad es ${persona2.name} y tiene ${persona2.age} años`
    );
  }
  if (persona3.age < persona1.age && persona3.age < persona1.age) {
    console.log(
      `La persona con menor edad es ${persona3.name} y tiene ${persona3.age} años`
    );
  }
}

NombreYEdad();

//Ejercicio11

function bonoEmpleado() {
  let añosTrabajadosEmpleado = 3;
  switch (añosTrabajadosEmpleado) {
    case 1:
      console.log("El empleado recibe un bono de 100 dólares");
      break;
    case 2:
      console.log("El empleado recibe un bono de 200 dólares");
      break;
    case 3:
      console.log("El empleado recibe un bono de 300 dólares");
      break;
    case 4:
      console.log("El empleado recibe un bono de 400 dólares");
      break;
    case 5:
      console.log("El empleado recibe un bono de 500 dólares");
      break;
    default:
      console.log("El empleado recibe un bono de 1000 dólares");
  }
}

bonoEmpleado();

//Ejercicio12

function sueldoProfesor() {
  let salarioInicial = 1500;
  for (let año = 1; año <= 6; año++) {
    salarioInicial = salarioInicial * 1.1 ** 6;
    console.log(`El año ${año} tendrá ${salarioInicial}`);
  }
}

sueldoProfesor();

//Ejercicio13

function alumnosNota() {
  let alumnosAprobados = 0;
  let alumnosDesaprobados = 0;
  let nAlumnos = 5;

  let nota = [18, 17, 15, 13, 16];

  for (let i = 0; i < nota.length; i++) {
    let unaNota = nota[i];
    if (unaNota >= 11 && unaNota <= 20) {
      alumnosAprobados++;
    }
  }
  alumnosDesaprobados = nAlumnos - alumnosAprobados;

  console.log(`El número de alumnos aprobados es ${alumnosAprobados}`);
  console.log(`El número de alumnos desaprobados es ${alumnosDesaprobados}`);
}

alumnosNota();

//Ejercicio14

function focosLote() {
  let focoVerdes = 0;
  let focoBlancos = 0;
  let focoRojos = 0;

  let loteFocos = ["Rojo", "Blanco", "Blanco", "Verde", "Verde"];

  for (let i = 0; i < loteFocos.length; i++) {
    let unFoco = loteFocos[i];
    if (unFoco == "Verde") {
      focoVerdes++;
    }
    if (unFoco == "Blanco") {
      focoBlancos++;
    }
    if (unFoco == "Rojo") {
      focoRojos++;
    }
  }

  console.log(`El número de focos Verde es ${focoVerdes}`);
  console.log(`El número de focos Blancos es ${focoBlancos}`);
  console.log(`El número de focos Rojos es ${focoRojos}`);
}

focosLote();

//Ejercicio15

function votacion() {
  let persona = 25;

  if (persona > 18) {
    console.log("Usted está habilitado para votar en las elecciones 2021");
  } else {
    console.log("Usted no cumple con la mayoría de edad. No puede votar");
  }
}

votacion();
