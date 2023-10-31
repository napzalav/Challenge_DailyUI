// en esta variable vamos a guardar nuestra tarjeta y acceder a ella
const tarjeta = document.querySelector('#tarjeta'),
    btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
    formulario = document.querySelector('#formulario-tarjeta'),
    numeroTarjeta = document.querySelector('#tarjeta .numero'),
    nombreTarjeta = document.querySelector('#tarjeta .nombre'),
    logoMarca = document.querySelector('#logo-marca'),
    firma = document.querySelector('#tarjeta .firma p');

// Volteamos la tarjeta para mostrar el frente si el usuario completa datos
const mostrarFrente = ()=>{
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
    }
}

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

    //cambiamos el contenido de numeroTarjeta en HTML y lo reemplazamos por el valorInput que es el que entra por el formulario
    numeroTarjeta.textContent = valorInput;

    //validamos que el contenido dentro de numeroTarjeta no se encuentre vacio porque genera un salto de linea en nuestra estructura HTML y para hacer esto realizo una estructura de control IF que detecte si esta vacio entonces coloque un texto predeterminado
    if(valorInput == ''){
        numeroTarjeta.textContent = '#### #### #### ####';

        logoMarca.innerHTML = '';
    }

    if (valorInput[0] == 4) { //para agregar el logo de VISA
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/visa.png';
        logoMarca.appendChild(imagen);
    } else if (valorInput[0] == 5) { //para agregar el logo de MASTERCARD
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = 'img/logos/mastercard.png';
        logoMarca.appendChild(imagen);
    }

    // si la tarjeta esta invertida y el usuario empieza a cargar datos, volteamos la tarjeta para que se visualicen en la parte frontal de la Card
    mostrarFrente();
});

// Input nombre de tarjeta
// validaremos que en el input de Nombre de tarjeta no se ingresen caracteres erroneos
formulario.inputNombre.addEventListener('keyup', (e)=>{
    let valorInput = e.target.value;

    //buscamos todos los numeros y los reemplazamos por nada
    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');

    //cambiamos el contenido de nombreTarjeta en HTML y lo reemplazamos por el valorInput que es el que entra por el formulario
    nombreTarjeta.textContent = valorInput;

    //agregamos el nombre almacenado en valorInput a la parte posterior de la tarjeta a modo de Firma
    firma.textContent = valorInput;

    //si el contenido dentro de nombreTarjeta se encuentra vacio, se autocompletara por defecto con el valor de 'Jhon Doe'
    if (valorInput == '') {
        nombreTarjeta.textContent = 'Jhon Doe';
    }

    // si la tarjeta esta invertida y el usuario empieza a cargar datos, volteamos la tarjeta para que se visualicen en la parte frontal de la Card
    mostrarFrente();
});

