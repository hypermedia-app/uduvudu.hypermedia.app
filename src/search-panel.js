import { html, PolymerElement } from '@polymer/polymer'
import fireNavigation from 'ld-navigation/fireNavigation'

import '@polymer/polymer/lib/elements/dom-repeat'
import '@polymer/paper-input/paper-input'
import '@polymer/paper-dropdown-menu/paper-dropdown-menu'
import '@polymer/paper-item/paper-item'
import '@polymer/paper-listbox/paper-listbox'

export default class Search extends PolymerElement {
  constructor() {
    super()
    this.showResults = false
    this.languages = [ 'EN' ]
  }

  static get properties() {
    return {
      showResults: Boolean,
      languages: Array,
      selectedLanguage: { type: String, notify: true }
    }
  }

  static get template() {
    return html`<style>
    :host {
        display: flex;
        flex-flow: wrap
    }

    [hidden] {
        display: none;
    }

    paper-listbox {
        max-height: 250px;
        overflow: scroll;
        background-color: white;
    }
    
    paper-listbox paper-item {
        cursor: pointer
    }

    #results {

    }

    #lang {
        flex: 1
    }

    #search {
        flex: 1 65%
    }
</style>

<paper-input id="search" label="Search DBPedia" placeholder="Try typing a wikipedia name"
             on-value-changed="fetchResults"></paper-input>
<paper-dropdown-menu id="lang" label="Language" value="{{selectedLanguage}}" no-animations>
    <paper-listbox slot="dropdown-content">
        <dom-repeat items="[[languages]]">
            <template>
                <paper-item>[[item]]</paper-item>
            </template>
        </dom-repeat>
    </paper-listbox>
</paper-dropdown-menu id=results>
<paper-listbox hidden$="[[!showResults]]">
    <dom-repeat items="[[results]]">
        <template>
            <paper-item on-click="select">[[item.label]]</paper-item>
        </template>
    </dom-repeat>
</paper-listbox>`
  }

  async fetchResults(e) {
    const q = e.detail.value
    if (q < 3) return

    const req = await fetch(`http://lookup.dbpedia.org/api/search/KeywordSearch?QueryClass=&MaxHits=15&QueryString=${q}`, {
      headers: {
        accept: 'application/json'
      }
    })
    const json = await req.json()

    this.results = json.results
      .sort(b => b.label.length)
      .sort(s => -s.label.search(new RegExp('^' + q, 'i')))
    this.showResults = true
  }

  select(e) {
    fireNavigation(e.model.item.uri)
    this.showResults = false
  }
}

customElements.define('dbpedia-search', Search)
