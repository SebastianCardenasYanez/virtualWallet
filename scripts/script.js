const slides = document.querySelectorAll('.main_article');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].style.animation = 'none';
  setTimeout(() => {
    slides[currentSlide].style.animation = 'slide 9s infinite'; /* Reemplaza '9s' según desees */
    currentSlide = (currentSlide + 1) % slides.length;
  }, 100); /* Retraso para reiniciar la animación */
}

setInterval(nextSlide, 13000); /* 9000 milisegundos = 9 segundos, ajusta según desees */
