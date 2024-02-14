const template = document.createElement('template');
template.innerHTML = `<div>
<label></label>
<input type="checkbox">
<slot name = 'title'> Meditation</slot>
<slot name = 'pick'> Pick up Anna</slot>



   
    
</div>`

class circlepage extends HTMLElement{
    constructor(){
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
        let clone = template.content.cloneNode(true);
        shadowRoot.appendChild(clone);
    }
}





customElements.define('circle-page', circlepage);

