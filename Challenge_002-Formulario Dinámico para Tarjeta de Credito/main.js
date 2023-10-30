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

// Input numero de tarjeta
// validaremos que en el input de Numero de tarjeta no se ingresen caracteres erroneos
formulario.inputNumero.addEventListener('keyup', (e)=>{
    // console.log(e);
    let valorInput = e.target.value;
    // console.log(valorInput);

    // usamos Expresiones Regulares (https://regexr.com/ => Cheatsheet)---------> //g
    formulario.inputNumero.value = valorInput

    //usamos \s para quitar los espacios en blanco, cada vez q se encuentre un espacio en blanco lo reemplazaremos por nada ('')
    .replace(/\s/g, '')

    //usamos \D para eliminar las letras, cada vez q encuentre una la reemplazara por nada ('')
    .replace(/\D/g, '')

    //ordenamos el valorInput en grupos de 4 digitos y agregamos un espacio entre ellos(1111 2222 3333 4444)
    //([0-9])=>busca los digitos del 0 al 9 y los agrupa
    //{4}=>esto le dice q cada 4 caracteres haga un grupo
    //$1 =>esto es para agregar un espacio despues de cada grupo de 4 caracteres
    .replace(/([0-9]{4})/g, '$1 ')

    //elimina el ultimo epaciado
    .trim();

    //asi es como quedaria de manera consecutiva solo que la separamos para q pueda entenderse que hace cada parte
    //formulario.inputNumero.value = valorInput.replace(/\s/g, '').replace(/\D/g, '').replace(/([0-9]{4})/g, '$1 ').trim();
});




