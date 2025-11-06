import createElement from '/assets/lib/create-element.js'

export default class ProductCard {
  constructor(product) {
    this.card = product;
    this.elem = this.render();
  }

  render() {
    const card = createElement(`
      <div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${this.card.image}" class="card__image" alt="product">
          <span class="card__price">€${this.card.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${this.card.name}</div>
            <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
        </div>
      </div>
    `)

    return card;
  }
}