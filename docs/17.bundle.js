/*! For license information please see 17.bundle.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{302:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return r});var s=a(19),l=a(44);a(48),a(163),a(300),a(164),a(301);class r extends s.a{constructor(){super(),this.showResults=!1,this.languages=["EN"]}static get properties(){return{showResults:Boolean,languages:Array,selectedLanguage:{type:String,notify:!0}}}static get template(){return s.b`<style>
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

    #results {

    }

    #lang {

    }

    #search {
        flex: 1 65%
    }
</style>

<paper-input id="search" label="Search DBPedia" placeholder="Try typing a wikipedia name"
             on-value-changed="fetchResults"></paper-input>
<paper-dropdown-menu id="lang" label="Language" value="{{selectedLanguage}}">
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
</paper-listbox>`}async fetchResults(e){const t=e.detail.value;if(t<3)return;const a=await fetch(`http://lookup.dbpedia.org/api/search/KeywordSearch?QueryClass=&MaxHits=15&QueryString=${t}`,{headers:{accept:"application/json"}}),s=await a.json();this.results=s.results.sort(e=>e.label.length).sort(e=>-e.label.search(new RegExp("^"+t,"i"))),this.showResults=!0}select(e){Object(l.a)(e.model.item.uri),this.showResults=!1}}customElements.define("dbpedia-search",r)}}]);
//# sourceMappingURL=17.bundle.js.map