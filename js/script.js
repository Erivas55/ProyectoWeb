/* SELECCION DE ELEMENTOS */
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const buttons = document.querySelectorAll('.btn');

/* EVENTO CLICK MENU */
if(menuToggle && navLinks){
    menuToggle.addEventListener('click', function(){
        navLinks.classList.toggle('active');
        console.log('Has hecho clic en el menu');
    });
}