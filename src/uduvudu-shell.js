import { HydrofoilShellBase } from '@hydrofoil/hydrofoil-shell/hydrofoil-shell-base'
import {html} from '@polymer/lit-element'
import LdpStore from 'rdf-store-ldp'

export default class UduvuduShell extends HydrofoilShellBase {
  get query () {
    return this.getQuery(this.url)
  }

  async loadResourceInternal (source) {
    const query = 'http://dbpedia.org/sparql?query=' + encodeURIComponent(this.getQuery(source)) + '&format=' + encodeURIComponent('text/turtle')

    return await graphPromise(query)
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
    const content = () => {
      switch (this.state) {
        case 'error':
          return this.renderError()
        default:
          if (this.isLoading) {
            return this.renderLoader()
          } else {
            return this.renderContent()
          }
      }
    }

    return html`<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    ${content()}`
  }

  renderLoader() {
    return html`<div class="alert alert-info">
            <button type="button" class="close" data-dismiss="alert">&times;</button>
            <strong>Loading</strong> ${this.url} is being loaded ...
            </div>`
  }

  renderContent() {
    return super.renderMain()
  }

  renderError() {
    return html`<div class="alert alert-danger">
                  <button type="button" class="close" data-dismiss="alert">&times;</button>
                  <strong>Error:</strong> ${this.lastError}.
                </div>`
  }
}

function graphPromise(query) {
  const store = new LdpStore()

  return new Promise((resolve, reject) => {
    store.graph(query, function (error, graph) {
      if (error) reject(error)
      else resolve(graph)
    })
  })
}

customElements.define('uduvudu-shell', UduvuduShell)
