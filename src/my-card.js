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
    this.backgroundcolor = "";
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        --my-card-bg: var(--my-card-bg, #ffffff);
        --my-card-title-bg: var(--my-card-title-bg, #ffe08a);
        --my-card-title-color: var(--my-card-title-color, #111);
        --my-card-border: var(--my-card-border, 1px solid #000);
      }

    
    :host([fancy]) .card {
        background-color: var(--my-card-fancy-bg, pink);
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px rgba(255, 0, 0, 0.35);
      }
  
      
           .card {
        max-width: 400px;
        border: 1px solid #000;
        border-radius: 12px;
        padding: 16px;
        background-color: var(--my-card-background-color, #fff);
        box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.25);
      }

.card.fancy {
  background-color: orange;
}

.card-title {
        font-size: 20px;
        margin: 0 0 12px 0;
        padding: 8px 10px;
        border-radius: 8px;
        color: var(--my-card-title-text-color, #000);
        background-color: var(--my-card-title-background-color, pink);
      }


.card-text {
  font-size: 15px;
  color: solid black;
  line-height: 1.5;
  margin-bottom: 16px;
}


img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 16px;
        display: block;
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
     details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }
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
  
    openChanged(e) {
    // fires when <details> opens OR closes
    if (e.target.getAttribute("open") !== null) {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }


  render() {
     const bg = this.backgroundcolor?.trim();
    const cardStyle = bg ? `background-color: ${bg};` : '';

    return html`
      <div class="card" style="${cardStyle}">
        <h2 class="card-title">${this.title}</h2>

        ${this.image
          ? html`<img src="${this.image}" alt="${this.alt || this.title}" />`
          : html``}

        <p class="card-text">${this.description}</p>

        <!-- ✅ Slot inside details/summary so HTML is flexible + collapsible -->
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
  <summary>
    <slot name="summary">Description</slot>
  </summary>

  <div class="details-body">
    <slot></slot>
  </div>
</details>



        ${this.link
          ? html`
              <a class="details-btn" href="${this.link}" target="_blank" rel="noopener">
                <button type="button">${this.button || 'Details'}</button>
              </a>
            `
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
      fancy: { type: Boolean, reflect: true },
      backgroundcolor: { type: String }
    };
  }
}
globalThis.customElements.define(MyCard.tag, MyCard);

