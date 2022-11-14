// Variables
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");

// Eventos
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
}

// Clases

// Funciones
function preguntarPresupuesto() {
  const presupuestoUsuario = prompt("¿Cual es tu presupuesto");

  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    presupuestoUsuario <= 0 ||
    isNaN(presupuestoUsuario)
  ) {
    window.location.reload();
  }
}
