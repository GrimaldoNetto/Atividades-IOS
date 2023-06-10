window.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const slides = document.getElementsByClassName('slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let counter = 1;
    const slideSize = slides[0].clientWidth;

    slider.style.transform = 'translateX(' + (-slideSize * counter) + 'px)';

    nextBtn.addEventListener('click', () => {
      if (counter >= slides.length - 1) return;
      slider.style.transition = 'transform 0.8s ease-in-out';
      counter++;
      slider.style.transform = 'translateX(' + (-slideSize * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
      if (counter <= 0) return;
      slider.style.transition = 'transform 0.8s ease-in-out';
      counter--;
      slider.style.transform = 'translateX(' + (-slideSize * counter) + 'px)';
    });

    slider.addEventListener('transitionend', () => {
      if (slides[counter].id === 'last-clone') {
        slider.style.transition = 'none';
        counter = slides.length - 2;
        slider.style.transform = 'translateX(' + (-slideSize * counter) + 'px)';
      }
      if (slides[counter].id === 'first-clone') {
        slider.style.transition = 'none';
        counter = slides.length - counter;
        slider.style.transform = 'translateX(' + (-slideSize * counter) + 'px)';
      }
    });
  });