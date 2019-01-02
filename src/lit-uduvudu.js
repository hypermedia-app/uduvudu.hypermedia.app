import { html, PolymerElement } from '@polymer/polymer/polymer-element.js'

import './uduvudu-shell'

class LitUduvudu extends PolymerElement {
  constructor () {
    super()

    this.languages = ['ar', 'de', 'en', 'es', 'fr', 'it', 'nl', 'pl', 'pt', 'ru', 'ja', 'zh']
    this.language = navigator.language.substring(0,2) || 'en'
  }

  ready () {
    super.ready()
    import('./search-panel')
  }

  static get properties() {
    return {
      language: String
    }
  }

  static get template () {
    return html`
      <style>
        :host {
            display: block;
            width: 560px;
            margin: 0 auto
        }
        
        h1 {
            @apply --paper-font-display1
        }
      </style>
      
      <section>
        <div id="intro">
<h1>UDUVUDU &ndash; DBpedia Viewer</h1>
This proof of concept application shows <a href="https://github.com/uduvudu/uduvudu/">UDUVUDU</a> and <a href="https://wikibus.github.io/lit-any/">lit-any</a> rendering entries from <a href="http://dbpedia.org">DBpedia</a>.
 <small>It further makes uses of <a href="https://github.com/rdf-ext/rdf-ext">rdf-ext</a>, and various <a href="http://webcomponents.org">Web Components</a>.</small>
       <br>
Please start searching for an entry in DBpedia by typing at least 3 letters. To confirm your decision select a proposition in the list.
    </div>
      </section>
      
      <dbpedia-search languages="[[languages]]" selected-language="{{language}}"></dbpedia-search>
      
      <uduvudu-shell base-url="http://dbpedia.org/resource/" use-hash-urls language="[[language]]"></uduvudu-shell>
    `
  }
}

window.customElements.define('lit-uduvudu', LitUduvudu)
