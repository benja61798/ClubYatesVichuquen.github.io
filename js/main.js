const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
    const anchoFondo = (window.pageYOffset / altura) * 900;
     if(anchoFondo <= 200){
        fondo.style.width = anchoFondo + '%';
     }
}

const elements = document.querySelectorAll('.animate');

window.addEventListener('scroll', () => {
  elements.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add('show');
    }
  });
});

