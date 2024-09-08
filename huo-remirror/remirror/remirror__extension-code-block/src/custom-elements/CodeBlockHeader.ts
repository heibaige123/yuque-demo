import { LitElement, css, html } from 'lit';

export function CodeBlockHeader(elementName: string) {
    class SimpleElement extends LitElement {
        static styles = css``;

        constructor() {
            super();
        }

        renderInputName() {
            return html`
            <input></input>
          `;
        }

        renderLanguageSelector() {
            return html`
                <select>
                    <option value="javascript">JavaScript</option>
                    <option value="typescript">TypeScript</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                </select>
            `;
        }

        renderThemeSelector() {
            return html`
                <select>
                    <option value="github">GitHub</option>
                    <option value="vscode">VS Code</option>
                    <option value="solarized-light">Solarized Light</option>
                    <option value="solarized-dark">Solarized Dark</option>
                </select>
            `;
        }

        render() {
            return html`
                ${this.renderInputName()} ${this.renderLanguageSelector()}
                ${this.renderThemeSelector()}
            `;
        }
    }
    customElements.define(elementName, SimpleElement);
}
