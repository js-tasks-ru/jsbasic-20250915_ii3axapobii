function initCarousel() {
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let carousel = document.querySelector('.carousel__inner');
  let carouselSlide = document.querySelector('.carousel__slide');
  let slideCounter = 0;

  arrowDisplay();
  arrowLeft.addEventListener('click', leftSlide);
  arrowRight.addEventListener('click', rightSlide);

  function rightSlide() {
    slideCounter++;
    carousel.style.transform = `translateX(-${carouselSlide.offsetWidth * slideCounter}px)`;
    arrowDisplay();
  }

  function leftSlide() {
    slideCounter--;
    carousel.style.transform = `translateX(-${carouselSlide.offsetWidth * slideCounter}px)`;
    arrowDisplay();
  }

  function arrowDisplay() {
    if (slideCounter === 0) {
      arrowLeft.style.display = 'none';
    } else if (slideCounter === 3) {
      arrowRight.style.display = 'none'
    } else {
      arrowLeft.style.display = '';
      arrowRight.style.display = '';
    }
  }
}
