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
    this.description = "Default description";
    this.image = "";
    this.alt = "";
    this.link = "";
    this.button = "";
    this.fancy = false;
    this.buttontext = "Details";
    this.backgroundcolor = "orange";
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
    :host([fancy]) {
  display: block;
  background-color: pink;
  border: 2px solid fuchsia;
  box-shadow: 10px 5px 5px red;
}
        }
      
          .card {
  max-width: 400px;
  border: 1px solid;
  border-radius: 12px;
  margin: 16px;
  padding: 16px;
  display: inline-block;
  background-color: var(--background-color, orange);
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
  <h2 class="card-title"><slot name="title">${this.title}</slot></h2>

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
      <details ?open="${this.fancy}">
  <summary>Description</summary>
  <div>
    <slot>${this.description}</slot>
  </div>
</details>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt: { type: String },
      link: { type: String },
      button: { type: String },
      fancy: { type: Boolean, reflect: true },
      buttontext: { type: String },
      backgroundcolor: { type: String }
    };
  }
}
globalThis.customElements.define(MyCard.tag, MyCard);

