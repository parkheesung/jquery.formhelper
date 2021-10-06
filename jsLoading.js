class jsLoading extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode : 'open' });
        console.log("key", this.getAttribute("template"));
        if (this.getAttribute("template") !== null && this.getAttribute("template") !== "") {
            this.shadowRoot.append(document.getElementById(this.getAttribute("template")).content.cloneNode(true));
        } else {
            this.shadowRoot.innerHTML = this.innerHTML;    
        }
    }
};

customElements.define("js-loading", jsLoading);