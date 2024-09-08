import { LitElement, css, html } from 'lit';

export function renderCustomElement(elementName: string) {
    class SimpleElement extends LitElement {
        static properties = {
            name: {},
        };

        static styles = css`
            :host {
                color: blue;
            }
        `;

        constructor() {
            super();
        }

        render() {
            return html`
                <p>Hello, !</p>
                <p>Hello, !</p>
                <p>Hello, !</p>
                <p>Hello, !</p>
                <p>Hello, !</p>
                <p>Hello, !</p>
            `;
        }
    }
    customElements.define(elementName, SimpleElement);
}
