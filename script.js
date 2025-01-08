// Seleccionamos el elemento que muestra el contador
const counterElement = document.getElementById('counter');

// Variable para llevar el conteo
let count = 0;

// Evento para aumentar el contador al hacer clic
document.body.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
});
