/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

// Preguntar cantidad de integrantes
const cantidadDeIntegrantes = Number(
  prompt("Cantidad de integrantes del grupo Familiar: ")
);

// VALIDACIONES

const regEx = /^(\d+\,?)+$/;

function validarEdad(edad) {
  if (edad === "") {
    return "El campo edad no puede estar vacio";
  } else if (!regEx.test(edad)) {
    return "El campo edad debe ser un numero entero";
  } else return "";
}
validarEdad("");

function validarSalario(salario) {
  if (salario === "") {
    return "El campo salario no pude estar vacio";
  } else if (!regEx.test(salario)) {
    return "El campo salario debe ser un numero entero";
  } else return "";
}

// Crear elementos HTML

const div = document.querySelector("div");

function crearLabelEdad(divIntegrante, index) {
  let label = document.createElement("label");
  divIntegrante.appendChild(label).textContent = "Edad del integrante: ";
}

function crearInputEdad(divIntegrante, index) {
  let input = document.createElement("input");
  let inputNuevo = divIntegrante.appendChild(input);
  inputNuevo.type = "number";
  inputNuevo.id = `edad${index}`;
}

function crearLabelSalario(divIntegrante, index) {
  let label = document.createElement("label");
  divIntegrante.appendChild(label).textContent = "Salario del integrante: ";
}

function crearInputSalario(divIntegrante, index) {
  let input = document.createElement("input");
  let inputNuevo = divIntegrante.appendChild(input);
  inputNuevo.type = "number";
  inputNuevo.id = `salario${index}`;
}

function crearBr(divIntegrante, index) {
  let br = document.createElement("br");
  divIntegrante.appendChild(br);
}

function botonAgregarSalario(divIntegrante, index) {
  let $botonSalario = document.createElement("button");
  divIntegrante.appendChild($botonSalario);
  $botonSalario.textContent = "Agregar Salario";
  $botonSalario.onclick = () => {
    crearLabelSalario(divIntegrante, index);
    crearInputSalario(divIntegrante, index);
    crearBr(divIntegrante, index);
    crearBr(divIntegrante, index);

    return false;
  };
}

// Crear un integrante de la familia

function crearIntegrante(index) {
  let divIntegrante = document.createElement("div");
  divIntegrante.id = `integrante${index}`;
  div.appendChild(divIntegrante);

  crearLabelEdad(divIntegrante, index);
  crearInputEdad(divIntegrante, index);
  botonAgregarSalario(divIntegrante, index);
  crearBr(divIntegrante, index);
  crearBr(divIntegrante, index);
}
// Crear la cantidad correspondiente a la cantidad de integrantes

for (let index = 0; index < cantidadDeIntegrantes; index++) {
  crearIntegrante(index);
}
// Traer los em para modificar

const $resultadoEdades = document.querySelector("#resultadoEdades");
const $resultadoSalarios = document.querySelector("#resultadoSalarios");

// Calcular las edades

// CREAR Y RELLENAR ARRAYS

let totalEdades;
let totalSalarios;
const arrayEdades = [];
const arraySalarios = [];

function crearYRellenarArrays() {
  for (let index = 0; index < cantidadDeIntegrantes; index++) {
    let edad = Number(document.querySelector(`#edad${index}`).value);
    arrayEdades.push(edad);

    let salario = Number(document.querySelector(`#salario${index}`).value);
    arraySalarios.push(salario);
  }
}
totalEdades = 0;
totalSalarios = 0;

// VALIDACIONES

function hacerValidaciones() {
  for (let index = 0; index < arrayEdades.length; index++) {
    console.log(validarEdad(document.querySelector(`#edad${index}`).value));
    if (
      (validarEdad(document.querySelector(`#edad${index}`).value) ===
        "El campo edad no puede estar vacio") |
      (validarEdad(document.querySelector(`#edad${index}`).value) ===
        "El campo edad debe ser un numero entero")
    ) {
      document.querySelector(`#edad${index}`).className = "error";
    } else if (
      validarEdad(document.querySelector(`#edad${index}`).value) === ""
    ) {
      document.querySelector(`#edad${index}`).className = "";
    }
  }

  for (let index = 0; index < arraySalarios.length; index++) {
    if (
      (validarSalario(document.querySelector(`#salario${index}`).value) ===
        "El campo salario no pude estar vacio") |
      (validarSalario(document.querySelector(`#salario${index}`).value) ===
        "El campo salario debe ser un numero entero")
    ) {
      document.querySelector(`#salario${index}`).className = "error";
    }
  }
}

function CalcularMenorMayorPromedioYMostrar() {
  for (let index = 0; index < arrayEdades.length; index++) {
    totalEdades += arrayEdades[index];
  }
  for (let index = 0; index < arraySalarios.length; index++) {
    totalSalarios += arraySalarios[index];
  }

  $resultadoEdades.textContent = `El promedio de edad de los integrantes es de : ${
    totalEdades / arrayEdades.length
  }`;
  $resultadoSalarios.textContent = `El promedio de salario de los integrantes es de : ${
    totalSalarios / arraySalarios.length
  }`;

  //   Buscar el mayor y el menor

  //   EDADES

  for (let index = 0; index < cantidadDeIntegrantes; index++) {
    let minimoEdades = 99999999;
    let maximoEdades = -1;
    for (let index = 0; index < arrayEdades.length; index++) {
      if (arrayEdades[index] < minimoEdades) {
        minimoEdades = arrayEdades[index];
      }
      if (arrayEdades[index] > maximoEdades) {
        maximoEdades = arrayEdades[index];
      }
    }
    let $edadMaxima = document.querySelector("#edadMaxima");
    $edadMaxima.textContent = `La edad maxima de la familia es: ${maximoEdades}`;

    let $edadMinima = document.querySelector("#edadMinima");
    $edadMinima.textContent = `La edad minima de la familia es: ${minimoEdades}`;
  }

  //   SALARIOS

  for (let index = 0; index < cantidadDeIntegrantes; index++) {
    let minimoSalarios = 99999999;
    let maximoSalarios = -1;
    for (let index = 0; index < arraySalarios.length; index++) {
      if (arraySalarios[index] < minimoSalarios) {
        minimoSalarios = arraySalarios[index];
      }
      if (arraySalarios[index] > maximoSalarios) {
        maximoSalarios = arraySalarios[index];
      }
    }
    let $edadMaxima = document.querySelector("#salarioMaximo");
    $edadMaxima.textContent = `El salario maximo de la familia es: ${maximoSalarios}`;

    let $edadMinima = document.querySelector("#salarioMinimo");
    $edadMinima.textContent = `El salario minimo de la familia es: ${minimoSalarios}`;
  }
}

// CREAR BOTONES

// Boton Calcular

const $botonCalcular = document.createElement("button");
$botonCalcular.innerText = "Calcular";
$botonCalcular.type = "button";
div.appendChild($botonCalcular);

$botonCalcular.onclick = () => {
  crearYRellenarArrays();

  hacerValidaciones();

  CalcularMenorMayorPromedioYMostrar();
  return false;
};

// Boton Resetear

const $botonResetear = document.createElement("button");
$botonResetear.innerText = "Resetear";
$botonResetear.type = "reset";
div.appendChild($botonResetear);

/*
  TAREA:
  Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
  Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
  
  Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
  */
