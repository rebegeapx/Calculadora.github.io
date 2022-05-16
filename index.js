const displayVal1 = document.getElementById('val1');
const displayVal2 = document.getElementById('val2');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayVal1, displayVal2);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () =>{
        display.agregarNumero(boton.innerHTML);
    });
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => {
        display.computar(boton.value);
    });
});