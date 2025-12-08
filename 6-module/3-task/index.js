import createElement from '../../assets/lib/create-element.js'

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render();
    
    this.arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    this.arrowRight = this.elem.querySelector('.carousel__arrow_right');
    this.carouselInner = this.elem.querySelector('.carousel__inner');
    this.carouselSlide = this.elem.querySelector('.carousel__slide');
    this.slideCounter = 0;

    this.initCarousel();
    this.productAdd();
  }

  productAdd() {
    this.elem.addEventListener('click', (event) => {
      if (event.target.closest('.carousel__button')){
        const slide = event.target.closest('.carousel__slide')
        
        this.eventProductAdd = new CustomEvent("product-add", { 
          detail: slide.dataset.id, 
          bubbles: true
        })

        this.elem.dispatchEvent(this.eventProductAdd)

      }
    })
  }

  initCarousel() {
    this.arrowDisplay();
    this.arrowLeft.addEventListener('click', () => this.leftSlide());
    this.arrowRight.addEventListener('click', () => this.rightSlide());
  }

  rightSlide() {
    this.slideCounter++;
    this.carouselInner.style.transform = `translateX(-${this.carouselSlide.offsetWidth * this.slideCounter}px)`;
    this.arrowDisplay();
  }

  leftSlide() {
    this.slideCounter--;
    this.carouselInner.style.transform = `translateX(-${this.carouselSlide.offsetWidth * this.slideCounter}px)`;
    this.arrowDisplay();
  }

  arrowDisplay() {
    if (this.slideCounter === 0) {
      this.arrowLeft.style.display = 'none';
    } else if (this.slideCounter === this.slides.length - 1) {
      this.arrowRight.style.display = 'none'
    } else {
      this.arrowLeft.style.display = '';
      this.arrowRight.style.display = '';
    }
  }

  render() {
    this.carousel = createElement(`
      <div class="carousel">
        <!--Кнопки переключения-->
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
        </div>
      </div>`);

    this.slide = this.slides
      .map(({ name, price, image, id }) =>
        `<!--Верстка 1-ого слайда-->
            <div class="carousel__slide" data-id="${id}">
              <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
              <div class="carousel__caption">
                <span class="carousel__price">€${price.toFixed(2)}</span>
                <div class="carousel__title">${name}</div>
                <button type="button" class="carousel__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                </button>
              </div>
            </div>`
      )
      .join('');

    let carouselInner = this.carousel.querySelector('.carousel__inner');
    carouselInner.innerHTML = this.slide;

    return this.carousel;
  }
}
