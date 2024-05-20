class MyResume extends HTMLElement {
  constructor() {
    super()
    const template = document.getElementById('my-resume')
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

  }
}

window.customElements.define('my-resume', MyResume)

