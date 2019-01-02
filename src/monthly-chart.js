import { html, LitElement } from '@polymer/lit-element'
import 'xtal-chart-istic/xtal-chart-istic'

const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
const getSeries = (data) => {
  return months.map(month => {
    return Number.parseFloat(data[month].u.replace(String.fromCharCode(8722), '-'))})
}

export default class MonthlyChart extends LitElement {
  constructor () {
    super()
    this.series = {}
  }

  static get properties () {
    return {
      header: {type: String},
      series: {type: Array, attribute: false},
    }
  }

  get chartData () {
    return Object.keys(this.series).reduce((previousValue, seriesKey) => {
      previousValue.data.labels.push(seriesKey)
      previousValue.data.series.push(getSeries(this.series[seriesKey]))

      return previousValue
    }, {
      data: {
        labels: [],
        series: []
      }
    })
  }

  render () {
    return html`
    <style> :host { display: block }</style>
    <h3>${this.header}</h3>
    <xtal-chart-istic draw .lineChart=${this.chartData}></xtal-chart-istic>`
  }
}

customElements.define('monthly-chart', MonthlyChart)
