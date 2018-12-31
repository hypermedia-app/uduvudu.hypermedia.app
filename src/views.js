import ViewTemplates from '@lit-any/lit-any/views'
import {html} from 'lit-html'
import {until} from 'lit-html/directives/until'
import {repeat} from 'lit-html/directives/repeat'

ViewTemplates.default.when
  .scopeMatches('hydrofoil-shell')
  .valueMatches(v => v.graph && v.resource)
  .renders((r, value) => {
    const matchingDone =
      doMatching(value.graph, value.resource)
        .then((matches) => {
          return html`${repeat(matches, m => {
            const scope = Object.keys(m.context)[0]
            return html`<div>${r(m.context[scope], scope)}</div>`})
          }`
        })

    return html`<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

${until(matchingDone, 'Rendering your triples')}`
  })

ViewTemplates.default.when
  .scopeMatches('uduvudu')
  .valueMatches(context => context && context.t && context.t.name)
  .renders((r, context) => {
    return r(context, context.t.name)
  })

ViewTemplates.default.when
  .scopeMatches('community')
  .renders((r, community) => {
    uduvudu.helper.prepareLanguage(community, 'fr')

    return html`<div style="max-height: 300px; width: 560px; background-color: lightgrey; padding: 4px; float: left; overflow-y: scroll;">
    <div style=" width: 235px; overflow: hidden; margin: -4px; text-align: right;" class="pull-right">
        <img style="max-height: 300px; max-width: 235px; margin-bottom: 10px; margin-left: 10px;" src="${community.img_url.u}" />
    </div>
        ${r(community.label_comment, 'uduvudu')}
    </div>`
  })

ViewTemplates.default.when
  .scopeMatches('label_comment')
  .renders((r, label_comment) => {
    return html`${r(label_comment.title, 'uduvudu')}
    ${r(label_comment.text, 'uduvudu')}`
  })

ViewTemplates.default.when
  .scopeMatches('title')
  .renders((r, title) => {
    return html`<h1>${title.u}</h1>`
  })

ViewTemplates.default.when
  .scopeMatches('text')
  .renders((r, text) => {
    return html`<p>${text.u}</p>`
  })

ViewTemplates.default.when
  .valueMatches(() => true)
  .renders((r, context) => {
    return html`<div>View not found for ${context.v}</div>`
  })

async function doMatching(graph, resource) {
  const uduvudu = await import('uduvudu')
  const matchers = await import('./matcher')

  uduvudu.initialize(matchers)

  return uduvudu.matcher(graph, resource, 0)
}
