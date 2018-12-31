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
          return html`${repeat(matches, m => html`<div>${r(m)}</div>`)}`
        })

    return html`${until(matchingDone, 'Rendering your triples')}`
  })

async function doMatching(graph, resource) {
  const uduvudu = await import('uduvudu')
  const matchers = await import('./matcher')

  uduvudu.initialize(matchers)

  return uduvudu.matcher(graph, resource, 0)
}
