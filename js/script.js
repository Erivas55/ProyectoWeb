/* SELECCION DE ELEMENTOS */
 const menuToggle = document.querySelector('.menu-toggle');
 const navLinks = document.querySelector('nav-links');
 const buttons = document.querySelector('.btn');

 /* SELECCION DE ELEMENTOS */


 /* EVENTO CLICK */
 if(menuToggle && navLinks){
    menuToggle.addEventListener('click', function(){
        navLinks.classList.toggle('active');
    });
 }

 /* MANIPULACION DE CLASES */
 if(navLinks){
    navLinks.classList.add('hidden');
    navLinks.classList.remove('hidden');
 }

 /* EVENTOS A BOTONES */
 buttons.forEach(button =>{
    button.addEventListener('link', function(){
        console.log('Has hecho clic en el menu');
        navLinks.classList.toggle('active');
    })
 })