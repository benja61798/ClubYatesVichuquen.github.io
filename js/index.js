window.sr = ScrollReveal();
     
    sr.reveal('.menu', {
         duration: 3000,
         origin: 'bottom',
         distance: '-100px'
    });

    sr.reveal('.banner', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px'
   });

   sr.reveal('.slider', {
    duration: 4000,
    origin: 'left',
    distance: '400px'
   });

   sr.reveal('.texto', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
   });

   sr.reveal('.sub', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
   });

   sr.reveal('.titulo', {
    duration: 2000,
    origin: 'top',
    distance: '200px'
   });

   sr.reveal('.sas', {
    duration: 2000,
    origin: 'bottom',
    distance: '-100px'
   });

   sr.reveal('#collage', {
    duration: 4000,
    origin: 'left',
    distance: '400px'
   });

   const iconoMenu = document.querySelector('#icono-menu'),
          menu = document.querySelector('#menu');
   
   iconoMenu.addEventListener('click', (e) => {
     menu.classList.toggle('active');
     document.body.classList.toggle('opacity');

     const rutaActual = e.target.getAttribute('src');

     if(rutaActual == 'img/27.png'){
          e.target.setAttribute('src', 'img/27.png');
    }else{
     e.target.setAttribute('src',('img/27.png'))
    }
   })
