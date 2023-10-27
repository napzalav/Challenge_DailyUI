// en esta variable vamos a guardar nuestra tarjeta y acceder a ella
const tarjeta = document.querySelector('#tarjeta');

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});