'use strict'
/* class card extends HTMLElement {
    constructor() {
        super()
        const shadow = this.attachShadow({ mode: 'open' });
        const html = document.createElement('div')
        const titulo = document.createElement('h1')
        titulo.textContent = " SENAI - Jandira"
        html.appendChild(titulo)
        const css = document.createElement('style')
        css.textContent = `
        div{
            display: grid;
            width: 400px;
            height: 400px;
            place-items: center;
            justify-content:center;
            color: white;
            background-color: blue;
        }
        `

        shadow.append(html, css)
    }

} */

class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' });
        this.nome = 'nome aluno'
        this.foto = null
        this.cor = 'plum'
        this.cor_hover = 'purple'
    }

    // atributos que eu quero que ele observe
    static get observedAttributes() {
        return ['nome', 'foto', 'cor', 'cor_hover']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue) {
        // valor antigo / valor que será mudado
        this[nameAttr] = newValue
    }

    connectedCallback() {
        /* append: posso colocar quantos eu quiser adicionando virgula
        appendchild: posso colocar apenas um por vez. por isso que aqui criei dois
        se fosse no append ficaria: this.shadow.append(this.styles(), this.component()) */
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
    styles() {
        const css = document.createElement('style')
        css.textContent = `
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .card{
                width: 200px;
                height: 300px;
                display: grid;
                grid-template-rows: 20% 60% 20%;
                place-items: center;
                background-color: ${this.cor};
                border-radius: 14px;
                box-shadow: 14px 14px 14px plum;
            }
            .card:hover{
                width: 210px;
                height: 310px;
                background-color: ${this.cor_hover};
                transition: .8s;
            }
            .card__text{
                color: white;
                font-size: 1.5rem ;
                font-weight: 600;
            }
            .card__image{
                height:  100px;
                width: 100px;
                border-radius: 50%;
                background-color: white;
                background-image: url(${this.foto});
                background-size: cover
                }
        `
        return css
    }

    component() {
        const card = document.createElement('div')
        card.classList.add('card')
        const nome = document.createElement('div')
        nome.classList.add('card__text')
        nome.textContent = this.nome
        const imagem = document.createElement('div')
        imagem.classList.add('card__image')
        const turma = document.createElement('div')
        turma.classList.add('card__text')
        turma.textContent = 'DS2M'
        card.append(nome, imagem, turma)
        return card
    }
}

customElements.define('card-layla', card)