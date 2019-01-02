import { HydrofoilShellBase } from '@hydrofoil/hydrofoil-shell/hydrofoil-shell-base'
import {html} from '@polymer/lit-element'
import './views'

import '@polymer/paper-toast/paper-toast'

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
    let rdfFetch
    let rdf
    let N3Parser

    await Promise.all([
      import('rdf-fetch-lite'),
      import('rdf-ext'),
      import('rdf-parser-n3')
    ]).then(resolved => {
      rdfFetch = resolved[0].default
        rdf = resolved[1]
        N3Parser = resolved[2].default
    })

    let formats = {
      parsers: new rdf.Parsers({
        'text/turtle': N3Parser
      })
    }

    const query = 'https://dbpedia.org/sparql?query=' + encodeURIComponent(this.getQuery(source)) + '&format=' + encodeURIComponent('text/turtle')

    const graph = await rdfFetch(query, { formats }).then(res => res.dataset())
    const matchingResult =  await doMatching(graph, source)

    return matchingResult.sort((a, b) => b.order - a.order)
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
    return html`
    <style>
        [hidden] { display: none }
        
        paper-toast {
            margin: 0;
        }
    </style>

    ${this.renderLoader()}
    ${this.renderContent()}
    ${this.renderError()}`
  }

  renderLoader() {
    return html`<paper-toast vertical-align="top" duration="0" ?opened="${this.isLoading && this.state !== 'error'}" .fitInto="${this}">
<strong>Loading</strong> ${this.url} is being loaded ...
</paper-toast>`
  }

  renderContent() {
    const model = this.model.map(m => uduvudu.helper.prepareLanguage(m, this.language))

    return html`<lit-view .value="${model}" template-scope="hydrofoil-shell" ?hidden="${this.state !== 'loaded'}"></lit-view>`
  }

  renderError() {
    return html`<paper-toast vertical-align="top" duration="0" ?opened="${this.state === 'error'}" .fitInto="${this}">
                  <strong>Error:</strong> ${this.lastError.message} <br> ${this.lastError.stack}.
                </paper-toast>`
  }
}

async function doMatching(graph, resource) {
  const uduvudu = await import('uduvudu')
  const matchers = await import('./matcher')

  uduvudu.initialize(matchers)

  return uduvudu.matcher(graph, resource, 0)
}

customElements.define('uduvudu-shell', UduvuduShell)
