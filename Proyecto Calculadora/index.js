const displayValorArriba = document.getElementById('valor-arriba');
const displayValorAbajo = document.getElementById('valor-abajo');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operacion');

const display = new Display(displayValorArriba, displayValorAbajo);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});


botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});