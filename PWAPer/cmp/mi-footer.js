class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Ramírez Valdés Perla :D`;
  }
}
customElements.define(
  "mi-footer", MiFooter);