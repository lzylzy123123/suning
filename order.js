class paper extends HTMLElement {
    constructor() {
        super();
        var shadow = this.attachShadow({ mode: 'open' });
        var templateElem = document.getElementById('paper');
        var content = templateElem.content.cloneNode(true);
        content.querySelector('img').setAttribute('src', this.getAttribute('image')); 
        this.k = content.getElementById('pap');
        this.pay = content.getElementById('pay');
        this.realpay = content.querySelector('#pay a');
        // this.tan = content.getElementById('tan');
        this.k.addEventListener('mouseover', () => {
            this.k.style.borderColor = '#bbbbbb'
        })
        this.k.addEventListener('mouseleave', () => {
            this.k.style.borderColor = '#f5f5f5'
        })
        this.pay.addEventListener('mouseover', () => {
            this.pay.style.backgroundColor = '#ff7700'
        })
        this.pay.addEventListener('mouseleave', () => {
            this.pay.style.backgroundColor = '#ff9900'
        })
        this.realpay.addEventListener('click', () => {
            document.getElementById('tan').style.display='block'
        })
        content.getElementById('delete').addEventListener('click',()=>{
            this.remove(content);
        })
        shadow.appendChild(content);

    }
}
window.customElements.define('pa-per', paper);