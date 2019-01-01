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
    ${renderMatches()}`
  })

function renderSubTemplate(render) {
  return (context) => render(context, context.t.name)
}

Object.keys(templates).forEach((templateName) => {
  const templateDefinition = templates[templateName]

  let view = ViewTemplates.default.when
    .scopeMatches(templateName.replace(/^_/, ''))

  if (templateDefinition.constraint) {
    view = view.valueMatches(templateDefinition.constraint)
  }

  view.renders((r, v) => {
      return templateDefinition(v, renderSubTemplate(r))
    })
})

ViewTemplates.default.when
  .valueMatches(() => true)
  .renders((r, context) => {
    return html`<div>View not found for ${context.v}</div>`
  })
