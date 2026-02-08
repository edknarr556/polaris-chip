import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {


  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.description = "Description of my card";
    this.image = "";
    this.alt = "";
    this.link = "";
    this.button = "";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
          .card {
  max-width: 400px;
  border: 1px solid;
  border-radius: 12px;
  margin: 16px;
  padding: 16px;
  display: inline-block;
}

.card.fancy {
  background-color: orange;
}

.card-title {
  font-size: 20px;
  color: solid black;
  margin-bottom: 12px;
}


.card-text {
  font-size: 15px;
  color: solid black;
  line-height: 1.5;
  margin-bottom: 16px;
}


.card img {
  width: 390px;
  height: 200px;
  max-width: 390px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 16px;
}


a.button {
  display: none;
  font-size: 0.95px;
  font-weight: 600;
  color: solid blue;
  background: solid blue;
  border: 2px solid blue;
  border-radius: 8px;
  padding: 12px 20px;
}


@media (min-width: 500px) and (max-width: 799px) {
  .details-btn {
    display: inline-block;
  }
}

@media (max-width: 499px) {
  .card {
    max-width: 92vw;
    padding: 12px;
  }

  .card-title {
    font-size: 1.1rem;
  }

  .card-text {
    font-size: 0.95px;
  }

  .card img {
    width: 100%;
    height: 160px;
  }
}
    `;
  }
  
  render() {
    return html`
    <div class="card">
  <h2 class="card-title">${this.title}</h2>

  <p class="card-text">
    ${this.description}
  </p>

  ${this.image
          ? html`<img src="${this.image}" alt="${this.alt || this.title}" />`
          : html``}

        ${this.link
          ? html`<a class="details-btn" href="${this.link}" target="_blank" rel="noopener">
              ${this.button || "Details"}
            </a>`
          : html``}
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt: { type: String },
      link: { type: String },
      button: { type: String },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.setupEventListeners();
  }

  setupEventListeners() {
    const duplicate = this.renderRoot.querySelector('.duplicate');
    if (duplicate) {
      duplicate.addEventListener('click', (event) => {
        const cards = this.renderRoot.querySelectorAll('#cardlist .card');
        if (cards.length >= 10) return; 
        
        const newCard = this.renderRoot.querySelector('.card').cloneNode(true);
        this.renderRoot.querySelector('#cardlist').appendChild(newCard);
      });
    }

    const titleBtn = this.renderRoot.querySelector('.title');
    if (titleBtn) {
      titleBtn.addEventListener('click', (event) => {
        var cardtitle = this.renderRoot.querySelector('#cardlist .card .card-title');
        cardtitle.innerHTML = "school rox";
      });
    }

    const imgChange = this.renderRoot.querySelector('.img-change');
    if (imgChange) {
      imgChange.addEventListener('click', (event) => {
        var cardimage = this.renderRoot.querySelector("img");
        cardimage.src = "https://github.com/elmsln.png";
      });
    }

    const bgChange = this.renderRoot.querySelector('#bg-change');
    if (bgChange) {
      bgChange.addEventListener('click', (event) => {
        const cards = this.renderRoot.querySelectorAll('#cardlist .card');
        cards.forEach(card => card.classList.toggle('fancy'));
      });
    }

    const deleteBtn = this.renderRoot.querySelector('#delete');
    if (deleteBtn) {
      deleteBtn.addEventListener('click', (event) => {
        const cards = this.renderRoot.querySelectorAll('#cardlist .card');
        if (cards.length <= 1) return;
        
        var card = this.renderRoot.querySelector('#cardlist .card:last-child');
        card.remove();
      });
    }
  }
}
globalThis.customElements.define(MyCard.tag, MyCard);

