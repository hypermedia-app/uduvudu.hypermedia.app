/*! For license information please see 13.bundle.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{285:function(t,e,n){"use strict";n.r(e);var i=n(9),r=n(0);function o(t,e,n){return function t(e,n,i){return(o,a)=>{let s;const u=a||i,p=e.getTemplate({value:o,scope:u});if(p){const i=t(e,n,u);s=r.f`${p.render(i,o,u)}`}else n?s="":(s=r.f`Template not found`,console.warn(`Template not found in registry '${e.name}' for value`,o));return s}}(t,n,null)(e.value,e.scope)}var a=n(38);n.d(e,"default",function(){return s});class s extends i.a{constructor(){super(),this.templateScope=null,this.value=null,this.ignoreMissing=!1,this.templateRegistry=""}static get properties(){return{templateScope:{type:String,attribute:"template-scope"},templateRegistry:{type:String,attribute:"template-registry"},value:{type:Object,attribute:!1},ignoreMissing:{type:Boolean,attribute:"ignore-missing"}}}render(){return this.value?o(a.a.byName(this.templateRegistry),{value:this.value,scope:this.templateScope},this.ignoreMissing):r.f``}}window.customElements.define("lit-view",s)}}]);
//# sourceMappingURL=13.bundle.js.map