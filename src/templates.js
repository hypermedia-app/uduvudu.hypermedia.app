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

export const tempC = (tempC) => {
  window['xtal_chart_istic'] = {
    href: '/node_modules/xtal-chart-istic/chartist.js'
  }

  import('xtal-chart-istic/xtal-chart-istic')

  const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']

  const getSeries = (data) => {
    return months.map(month => Number.parseFloat(data[month].u))
  }

  const chartData = {
    data: {
      labels: ['Average Low', 'Daily Mean', 'Average High'],
      series: [
        getSeries(tempC.lowC),
        getSeries(tempC.meanC),
        getSeries(tempC.highC)
      ]
    }
  }

  return html`
  <div>
    <br>
    <h3>Temperatures per Month</h3>
    <xtal-chart-istic draw .lineChart=${chartData}></xtal-chart-istic>
  </div>`
}

export const humidity = (humi) => {
  window['xtal_chart_istic'] = {
    href: '/node_modules/xtal-chart-istic/chartist.js'
  }

  import('xtal-chart-istic/xtal-chart-istic')

  const months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
  const getSeries = (data) => {
    return months.map(month => Number.parseFloat(data[month].u))
  }

  const chartData = {
    data: {
      labels: ['Humidity in %/month'],
      series: [
        getSeries(humi)
      ]
    }
  }

  return html`
  <div>
    <br>
    <h3>Humidity per Month</h3>
    <xtal-chart-istic draw .lineChart=${chartData}></xtal-chart-istic>
  </div>`
}

export const location = (location) => {
  import('./google-map')

  return html`
   <div style="height: 250px; width: 560px; float: left; margin-bottom: 15px">
     <big>&#8982;</big> ${location.lat.u} / ${location.long.u}
     
     <google-map latitude="${location.lat.u}" longitude="${location.long.u}" key="AIzaSyAFRTcPPyYit9ERj9COlgpgYW-Ve-lUeUs"></google-map>
   </div>`
}

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
