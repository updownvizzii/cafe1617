

window.onload = function() {
  if (!document.cookie.includes('visited=true')) {
    document.querySelector('.header nav ul li:first-child').classList.add('glow');
    document.cookie = 'visited=true; expires=' + new Date(new Date().getTime() + 86400000).toUTCString();
  }
}





let activeSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide(index) {
  slides[activeSlide].classList.remove('active');
  activeSlide = index;
  slides[activeSlide].classList.add('active');
}

// Automatically change slides every 3 seconds
setInterval(() => {
  let nextSlide = activeSlide + 1;
  if (nextSlide === slides.length) nextSlide = 0;
  changeSlide(nextSlide);
}, 4000);