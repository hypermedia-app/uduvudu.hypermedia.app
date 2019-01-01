import {html} from 'lit-html'
import {repeat} from 'lit-html/directives/repeat'
import {until} from 'lit-html/directives/until'

import 'ld-navigation/ld-link'

/*
 Visualizer Templates
*/

export const title =
  (title) => html`<h1>${title.u}</h1>`

export const mtitle = (mtitle) =>
  html`<h1>${mtitle.title.u}</h1>`

export const text = (text) =>
  html`<p>${text.u}</p>`

export const neighboringMunicipality = (neighboringMunicipality) =>
  html`<div style="width: 235px; float: left;">
    <h4>Neighboring municipalities</h4>
    <p>
        <ul style="border-left: 1px solid lightgrey;">
        ${repeat(neighboringMunicipality, municipality => html`<li><ld-link resource-url="${municipality.title.m.r}"><a>${municipality.title.u}</a></ld-link></li>`)}
        </ul>
      </p>
 </div>`

export const category = (category) =>
  html`<div style="width: 235px; float: left;">
         <h4>Categories</h4>
         <p>
            <ul style="border-left: 1px solid lightgrey;">
            ${repeat(category, c => html`<li><ld-link resource-url="${c.title.m.r}"><a>${c.title.u}</a></ld-link></li>`)}
            </ul>
         </p>
       </div>`

export const abstract = (abstract) => html`
  <div style="width: 560px; padding: 4px; float: left;">
  <h2>Abstract</h2>
  <p>${abstract.u}</p>
  </div>`

export const quote = (quote) => html`
  <div style="width: 560px; padding: 4px; float: left;">
  <p style="font-size:500%; font-family: Times New Roman; margin-bottom: -40px;">“</p>
<p>${quote.u}</p>
<p style="font-size:500%; font-family: Times New Roman; margin-bottom: -40px; margin-top: -20px; text-align: right;">”</p>
</div>`

export const license = (obj) =>
  html`<p><small>&copy; ${obj.u}</small></p>`

export const name = (name) => {
  return html`<p><small>${Object.keys(name.l).map(key => name.l[key]).join(', ')}</small></p>`
}

export const title_text = (title_text, template) =>
  html`${template(title_text.title)}
       ${template(title_text.text)}`

export const wikiInfo = wikiInfo =>
  html`<div style="height: 235px;  width: 140px; float: left;">
  <img style="width: 30px; height: 30px; float: left;" src="http://upload.wikimedia.org/wikipedia/en/8/80/Wikipedia-logo-v2.svg">
  <p><big>&nbsp;Wikipedia</big></p>
<p>
ID: <a href="http://en.wikipedia.org/?curid=${wikiInfo.wikiPageID.u}">${wikiInfo.wikiPageID.u}</a> <br>
Revision: <a href="http://en.wikipedia.org/?curid=${wikiInfo.wikiPageID.u}&oldid=${wikiInfo.wikiPageRevisionID.u}">${wikiInfo.wikiPageRevisionID.u}</a>
  </p>
  </div>`

export const community = (community, template) =>
  html`<div style="max-height: 300px; width: 560px; background-color: lightgrey; padding: 4px; float: left; overflow-y: scroll;">
  <div style=" width: 235px; overflow: hidden; margin: -4px; text-align: right;" class="pull-right">
  <img style="max-height: 300px; max-width: 235px; margin-bottom: 10px; margin-left: 10px;" src="${community.img_url.u}" />
</div>
${template(community.label_comment)}
  </div>
  </script>`

export const label_comment = (label_comment, template) =>
  html`${template(label_comment.title)}
       ${template(label_comment.text)}`

export const community_stat = (community_stat) => html`
 ${template(community_stat.website)}
 ${template(community_stat.elevation)}
 ${template(community_stat.area)}`


export const elevation = (elevation) =>
  html`<div style="float: left; min-width: 200px;">
         <p><i class="glyphicon glyphicon-stats"></i> Elevation: ${elevation.u} m</p>
       </div>`

export const area = (area) =>
  html`<div style="float: left; min-width: 200px;">
         <p><i class="glyphicon glyphicon-stats"></i> Area: ${num(area.u)} km<sup>2</sup></p>
       </div>`

export const website = (website) => html`
  <div style="float: left; min-width: 200px;">
    <p><i class="glyphicon glyphicon-link"></i> <a href="${website.u}">${website.u}</a></p>
  </div>`

//export const mhltemp = (mhltemp) =>
//   <div style="float: left">
//   <br>
//   <h3>Temperatures per Month</h3>
// <canvas id="cvs_mhltemp" width="560px" height="200px"></canvas>
//   <p>Temperatures in °C/month: <span style="color: rgba(120,120,220,1)">Average Low</span>, <span style="color: rgba(220,220,220,1)">Daily Mean</span>, <span style="color: rgba(220,120,120,1)">Average High</span></p>
// </div>

//export const mhltemp_js = (mhltemp_js) =>
// var script = document.createElement("script");
// script.type = "text/javascript";
// script.src = "http://cdnjs.cloudflare.com/ajax/libs/Chart.js/0.2.0/Chart.min.js";
// script.onload = function(){
//   var ctx = document.getElementById("cvs_mhltemp").getContext("2d");
//   var data = {
//     labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
//     datasets : [
//       {
//         fillColor : "rgba(120,120,220,0.5)",
//         strokeColor : "rgba(220,220,220,1)",
//         data : [${num(tempC.lowC.jan.u)},${num(tempC.lowC.feb.u)},${num(tempC.lowC.mar.u)},${num(tempC.lowC.apr.u)},${num(tempC.lowC.may.u)},${num(tempC.lowC.jun.u)},${num(tempC.lowC.jul.u)},${num(tempC.lowC.aug.u)},${num(tempC.lowC.sep.u)},${num(tempC.lowC.oct.u)},${num(tempC.lowC.nov.u)},${num(tempC.lowC.dec.u)}]
// },
//   {
//     fillColor : "rgba(220,220,220,0.5)",
//       strokeColor : "rgba(220,220,220,1)",
//     data : [${num(tempC.meanC.jan.u)},${num(tempC.meanC.feb.u)},${num(tempC.meanC.mar.u)},${num(tempC.meanC.apr.u)},${num(tempC.meanC.may.u)},${num(tempC.meanC.jun.u)},${num(tempC.meanC.jul.u)},${num(tempC.meanC.aug.u)},${num(tempC.meanC.sep.u)},${num(tempC.meanC.oct.u)},${num(tempC.meanC.nov.u)},${num(tempC.meanC.dec.u)}]
//   },
//   {
//     fillColor : "rgba(220,120,120,0.5)",
//       strokeColor : "rgba(220,220,220,1)",
//     data : [${num(tempC.highC.jan.u)},${num(tempC.highC.feb.u)},${num(tempC.highC.mar.u)},${num(tempC.highC.apr.u)},${num(tempC.highC.may.u)},${num(tempC.highC.jun.u)},${num(tempC.highC.jul.u)},${num(tempC.highC.aug.u)},${num(tempC.highC.sep.u)},${num(tempC.highC.oct.u)},${num(tempC.highC.nov.u)},${num(tempC.highC.dec.u)}]
//   }
// ]
// }
//   new Chart(ctx).Bar(data);
// };
// document.body.appendChild(script);

export const humidity = (humidity) => html`
<div style="float: left">
  <br>
  <h3>Humidity per Month</h3>
  <canvas id="cvs_humidity" width="560px" height="200px"></canvas>
  <p>Humidity in %/month</p>
</div>`

//export const humidity_js = (humidity_js) =>
// var script = document.createElement("script");
// script.type = "text/javascript";
// script.src = "http://cdnjs.cloudflare.com/ajax/libs/Chart.js/0.2.0/Chart.min.js";
// script.onload = function(){
//   var ctx = document.getElementById("cvs_humidity").getContext("2d");
//   var data = {
//     labels : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
//     datasets : [
//       {
//         fillColor : "rgba(120,220,120,0.5)",
//         strokeColor : "rgba(220,220,220,1)",
//         data : [${humi.jan.u},${humi.feb.u},${humi.mar.u},${humi.apr.u},${humi.may.u},${humi.jun.u},${humi.jul.u},${humi.aug.u},${humi.sep.u},${humi.oct.u},${humi.nov.u},${humi.dec.u}]
// }
// ]
// }
//   new Chart(ctx).Bar(data, {scaleOverride: true,scaleSteps: 10, scaleStepWidth: 10, scaleBeginAtZero : true});
// };
// document.body.appendChild(script);

export const location = (location) => html`
 <div id="map-canvas" style="height: 250px; width: 560px; float: left;">
   <big>&#8982;</big> ${location.lat.u} / ${location.long.u}
 </div>`

//export const location_js = (location_js) =>
// var script = document.createElement("script");
// script.type = "text/javascript";
// script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAFRTcPPyYit9ERj9COlgpgYW-Ve-lUeUs&sensor=false&callback=initializeMap";
// document.body.appendChild(script);
//
// initializeMap = function () {
//   var myLatlng = new google.maps.LatLng(${location.lat.u}, ${location.long.u});
//   var mapOptions = { center: myLatlng, disableDefaultUI: true, zoomControl: true, zoom: 12, mapTypeId: google.maps.MapTypeId.ROADMAP };
//   var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
// };

export const created = (created) => html`
 <div style="height: 235px; width: 140px; float: left;">
   This resource was created on ${created.u}.
 </div>`

export const img = (img) =>
  html`<div style="width: 140px; height: 235px; float: left">
         <img style="min-width: 140px; min-height: 235px;" src="${img_url.u}" class="img-responsive" />
       </div>`

// container for literals
export const literals = (literals, template) => {
  const contentsReady = import('paper-collapse-item/paper-collapse-item')
    .then(() => repeat(literals, (e) => template(e.literal)))

  return html`
     <paper-collapse-item header="Remaining literals" style="clear: both; display: block">
        ${until(contentsReady, '')}
     </paper-collapse-item>`
}

// container for unknowns
export const unknowns = (unknowns, template) => {
  const contentsReady = import('paper-collapse-item/paper-collapse-item')
    .then(() => repeat(unknowns, (e) => template(e.unknown)))

  return html`
     <paper-collapse-item header="Remaining links" style="clear: both; display: block">
        ${until(contentsReady, '')}
     </paper-collapse-item>`
}

// <!-- literal -->
export const literal = (literal) =>
   html`<div style=" width: 140px; height: 140px; float: left; overflow: hidden;">
            <p title="${literal.subject.u} - ${literal.predicate.u}">
                <b>${literal.name.u}</b>:<br /> ${literal.text.u}
            </p>
        </div>`
literals.constraint = (value) => value.length > 0

// <!-- void -->
export const _void = () => html``

// unknown
export const unknown = (unknown) => {
  return html`<div style=" width: 140px; height: 140px; float: left; overflow: hidden;">
         <small>
            <p>
                <ld-link resource-url="${unknown.subject.u}"><a>${unknown.s.u}</a></ld-link>
                <br />&#9608;
                <br />
                <ld-link resource-url="${unknown.predicate.u}"><a>${unknown.p.u}</a></ld-link>
                <br />&#9608;
                <br />
                <ld-link resource-url="${unknown.object.u}"><a>${unknown.o.u}</a></ld-link>
            </p>
         </small>
       </div>`
}