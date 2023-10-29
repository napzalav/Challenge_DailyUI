// en esta variable vamos a guardar nuestra tarjeta y acceder a ella
const tarjeta = document.querySelector('#tarjeta'),
    btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
    formulario = document.querySelector('#formulario-tarjeta');

// Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

// Boton de abrir formulario / Formulario
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

// Select del mes generado dinamicamente
for(let i = 1; i <= 12; i++){
    // console.log(i);
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

// Select del año generado dinamicamente
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
    // console.log(i);
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}