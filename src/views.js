import ViewTemplates from '@lit-any/lit-any/views'
import {html} from 'lit-html'
import {repeat} from 'lit-html/directives/repeat'
import * as templates from './templates'

ViewTemplates.default.when
  .scopeMatches('hydrofoil-shell')
  .renders((r, matches) => {
    const renderMatches = () => {
      return html`${repeat(matches, m => {
        const scope = Object.keys(m.context)[0]
        const value = m.context[scope]

        return html`${r(value, scope)}`
      })}`
    }

    return html`<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    ${renderMatches()}`
  })

function renderSubTemplate(render) {
  return (context) => render(context, context.t.name)
}

Object.keys(templates).forEach((templateName) => {
  ViewTemplates.default.when
    .scopeMatches(templateName.replace(/^_/, ''))
    .renders((r, v) => {
      return templates[templateName](v, renderSubTemplate(r))
    })
})

ViewTemplates.default.when
  .valueMatches(() => true)
  .renders((r, context) => {
    return html`<div>View not found for ${context.v}</div>`
  })
