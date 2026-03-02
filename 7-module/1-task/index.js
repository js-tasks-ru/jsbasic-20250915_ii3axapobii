import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();

    this.ribbonArrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    this.ribbonArrowRight = this.elem.querySelector('.ribbon__arrow_right');
    this.ribbonInner = this.elem.querySelector('.ribbon__inner');
    
    this.initRibbonMenu();
    this.ribbonSelect();
  }

  initRibbonMenu(){
    this.updateArrows();
    this.ribbonArrowLeft.addEventListener('click', () => this.ribonnLeftSlide());
    this.ribbonArrowRight.addEventListener('click', () => this.ribonnRightSlide());

    this.ribbonInner.addEventListener('scroll', () => this.updateArrows());
  }

  ribonnLeftSlide(){
    this.ribbonInner.scrollBy(-350, 0);
  }

  ribonnRightSlide(){
    this.ribbonInner.scrollBy(350, 0);
  }

  updateArrows(){
    let scrollLeft = this.ribbonInner.scrollLeft;
    let scrollWidth = this.ribbonInner.scrollWidth;
    let clientWidth = this.ribbonInner.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth; // число пикселей, например, 100 или 0.

    // Определение условия скрытия левой кнопки
    if (scrollLeft === 0){
      this.ribbonArrowLeft.classList.remove('ribbon__arrow_visible');
    } else {
    this.ribbonArrowLeft.classList.add('ribbon__arrow_visible');
    }
    
    //  Определение условия скрытия правой кнопки
    if (scrollRight < 1){
      this.ribbonArrowRight.classList.remove('ribbon__arrow_visible');
    } else {
    this.ribbonArrowRight.classList.add('ribbon__arrow_visible');
    }      
  }

  ribbonSelect() {
    this.elem.addEventListener('click', (event) => {
      const category = event.target.closest('.ribbon__item');
      const categoryActive = this.elem.querySelector('.ribbon__item_active');
      if (!category) return;
  
      event.preventDefault();
      if (categoryActive) {
        categoryActive.classList.remove('ribbon__item_active');
      }
      category.classList.add('ribbon__item_active');

      const eventRibbonSelect = new CustomEvent('ribbon-select', {
        detail: category.dataset.id,
        bubbles: true,
      });

      this.elem.dispatchEvent(eventRibbonSelect);
    });
  }
  
  render(){
    this.ribbonMenu = createElement(`
       <!--Корневой элемент RibbonMenu-->
      <div class="ribbon">
        <!--Кнопка прокрутки влево-->
        <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      
        <!--Кнопка прокрутки вправо-->
        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>

        <nav class="ribbon__inner">
        <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
        </nav>
      </div>`
    );
    
    this.categore = this.categories
      .map(({id, name}) => 
        `<!--Верстка всех категорий-->
          <a href="#" class="ribbon__item" data-id="${id}">${name}</a>
        `
      )
      .join('');

      let ribbonInner = this.ribbonMenu.querySelector('.ribbon__inner');
      ribbonInner.innerHTML = this.categore;

      return this.ribbonMenu;
  }
}