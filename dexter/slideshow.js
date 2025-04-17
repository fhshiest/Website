const slides = document.querySelectorAll('.slide');
let current = 0;

function updateSlides() {
  slides.forEach((slide, i) => {
    slide.className = 'slide'; // reset classes

    if (i === current) {
      slide.classList.add('active');
    } else if (i === (current - 1 + slides.length) % slides.length) {
      slide.classList.add('left');
    } else if (i === (current + 1) % slides.length) {
      slide.classList.add('right');
    }
  });
}

document.querySelector('.left').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlides();
});

document.querySelector('.right').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  updateSlides();
});

updateSlides(); // init
