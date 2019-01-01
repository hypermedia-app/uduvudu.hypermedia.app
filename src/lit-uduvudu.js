import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import './uduvudu-shell'

class LitUduvudu extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
            display: block;
            width: 560px;
            margin: 0 auto
        }
      </style>
      <uduvudu-shell base-url="http://dbpedia.org/resource/" use-hash-urls></uduvudu-shell>
    `;
  }
}

window.customElements.define('lit-uduvudu', LitUduvudu);
