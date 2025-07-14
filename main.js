// Lista s de especialidades
const especialidades = [
  "Clínica Médica - Lunes 10:00hs",
  "Pediatría - Martes 14:30hs",
  "Dermatología - Miércoles 11:15hs",
  "Cardiología - Jueves 9:00hs",
];

// Mostrar bienvenida
alert("Bienvenido al sistema de turnos médicos");

// Pedir nombre
let nombre = prompt("Ingrese su nombre:");

// Mostrar opciones
let mensaje = "Elija una especialidad:\n";
for (let i = 0; i < especialidades.length; i++) {
  mensaje += i + 1 + ". " + especialidades[i] + "\n";
}

// Elegir especialidad
let opcion = parseInt(prompt(mensaje));

// Validar y mostrar turno
if (nombre && opcion >= 1 && opcion <= especialidades.length) {
  let seleccion = especialidades[opcion - 1];
  let texto =
    "✅ Turno confirmado\n\n👤 Paciente: " + nombre + "\n📋 " + seleccion;
  alert(texto);
  console.log(texto);
} else {
  alert("❌ Datos inválidos. Turno no generado.");
}
