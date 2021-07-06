function probarValidarEdad() {
  console.assert(
    validarEdad("") === "El campo edad no puede estar vacio",
    "validarEdad no valido que el campo no este vacio"
  );

  console.assert(
    validarEdad(1.5) === "El campo edad debe ser un numero entero",
    "validarEdad no valido que el numero sea entero"
  );
}

function probarValidarSalario() {
  console.assert(
    validarSalario("") === "El campo salario no pude estar vacio",
    "validarSalario no valido que el campo no este vacio"
  );
  console.assert(
    validarSalario(1.5) === "El campo salario debe ser un numero entero",
    "validarSalario no valido que el numero sea entero"
  );
}

function hacerPruebas() {
  probarValidarEdad();
  probarValidarSalario();
  hacerValidaciones();
}

hacerPruebas();
