import { HydrofoilShellBase } from '@hydrofoil/hydrofoil-shell/hydrofoil-shell-base'
import {html} from '@polymer/lit-element'
import * as rdf from 'rdf-ext'
import rdfFetch from 'rdf-fetch-lite'
const N3Parser = require('rdf-parser-n3')
import './views'

let formats = {
  parsers: new rdf.Parsers({
    'text/turtle': N3Parser
  })
}

export default class UduvuduShell extends HydrofoilShellBase {
  constructor() {
    super()

    this.language = navigator.language.substring(0,2) || "en"
    this.model = []
    this.lastError = {}
  }

  static get properties() {
    return Object.assign(HydrofoilShellBase.properties, {
      language: { type: String }
    })
  }

  get query () {
    return this.getQuery(this.url)
  }

  async loadResourceInternal (source) {
    const query = 'http://dbpedia.org/sparql?query=' + encodeURIComponent(this.getQuery(source)) + '&format=' + encodeURIComponent('text/turtle')

    const graph = await graphPromise(query)

    return await doMatching(graph, source)
  }

  getQuery (url) {
    return `CONSTRUCT
            { 
                <${url}> ?p ?o. 
                ?o <http://www.w3.org/2000/01/rdf-schema#label> ?l
            } 
            WHERE 
            {
                <${url}> ?p ?o.
                OPTIONAL 
                {
                    ?o <http://www.w3.org/2000/01/rdf-schema#label> ?l.
                }
            }`
  }

  renderMain() {
    return html`<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <style>
        [hidden] { display: none }
    </style>

    ${this.renderLoader()}
    ${this.renderContent()}
    ${this.renderError()}`
  }

  renderLoader() {
    return html`<div class="alert alert-info" ?hidden="${this.state !== 'loading'}">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Loading</strong> ${this.url} is being loaded ...
            </div>`
  }

  renderContent() {
    const model = this.model.map(m => uduvudu.helper.prepareLanguage(m, this.language))

    return html`<lit-view .value="${model}" template-scope="hydrofoil-shell" ?hidden="${this.isLoading || this.state === 'error'}"></lit-view>`
  }

  renderError() {
    return html`<div class="alert alert-danger" ?hidden="${this.state !== 'error'}">
                  <button type="button" class="close" data-dismiss="alert">&times;</button>
                  <strong>Error:</strong> ${this.lastError.message} <br> ${this.lastError.stack}.
                </div>`
  }
}

function graphPromise(query) {
  return rdfFetch(query, { formats }).then(res => res.dataset())
}

async function doMatching(graph, resource) {
  const uduvudu = await import('uduvudu')
  const matchers = await import('./matcher')

  uduvudu.initialize(matchers)

  return uduvudu.matcher(graph, resource, 0)
}

customElements.define('uduvudu-shell', UduvuduShell)
