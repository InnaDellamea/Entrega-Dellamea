// Array de especialidades
const especialidades = [
  { id: 1, nombre: "Clínica Médica", horario: "Lunes 10:00hs" },
  { id: 2, nombre: "Pediatría", horario: "Martes 14:30hs" },
  { id: 3, nombre: "Dermatología", horario: "Miércoles 11:15hs" },
  { id: 4, nombre: "Cardiología", horario: "Jueves 9:00hs" },
];

// Función para ingresar datos (entrada)
function solicitarDatos() {
  let nombre = prompt("Ingrese su nombre:");
  if (!nombre || nombre.trim() === "") {
    alert("⚠️ Nombre inválido.");
    return null;
  }

  let lista = "📋 Especialidades disponibles:\n";
  for (let i = 0; i < especialidades.length; i++) {
    lista +=
      especialidades[i].id +
      ". " +
      especialidades[i].nombre +
      " - " +
      especialidades[i].horario +
      "\n";
  }

  let seleccion = parseInt(
    prompt(`${lista}\nIngrese el número de la especialidad que desea:`)
  );

  // Buscar la especialidad seleccionada
  let seleccionada = null;
  for (let i = 0; i < especialidades.length; i++) {
    if (especialidades[i].id === seleccion) {
      seleccionada = especialidades[i];
      break;
    }
  }

  if (!seleccionada) {
    alert("❌ Especialidad no válida.");
    return null;
  }

  return { nombre: nombre, seleccionada: seleccionada };
}

// Función para mostrar confirmación (procesamiento + salida)
function confirmarTurno(nombre, especialidad) {
  const mensaje =
    "✅ Turno reservado:\n\n👤 Paciente: " +
    nombre +
    "\n🩺 Especialidad: " +
    especialidad.nombre +
    "\n📅 Horario: " +
    especialidad.horario;
  alert(mensaje);
  console.log(mensaje);
}

// Función principal
function iniciarSimulador() {
  alert("Bienvenido al sistema de turnos médicos.");

  const datos = solicitarDatos();

  if (datos) {
    const confirmar = confirm(
      "¿Desea confirmar el turno en " + datos.seleccionada.nombre + "?"
    );
    if (confirmar) {
      confirmarTurno(datos.nombre, datos.seleccionada);
    } else {
      alert("❌ Turno cancelado.");
    }
  }
}

// Ejecutar
if (confirm("¿Desea solicitar un turno médico?")) {
  iniciarSimulador();
} else {
  alert("Operación cancelada.");
}
