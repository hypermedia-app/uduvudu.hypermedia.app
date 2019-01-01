import { html, LitElement } from '@polymer/lit-element'
import loadGoogleMapsApi from 'load-google-maps-api'

export default class GoogleMap extends LitElement {
  static get properties () {
    return {
      latitude: {type: Number},
      longitude: {type: Number},
      key: {type: String},
      map: {key: Object}
    }
  }

  connectedCallback() {
    super.connectedCallback()

    Promise.all([
      loadGoogleMapsApi({ key: this.key }),
      this.updateComplete
    ]).then((r) => {
      const googleMaps = r[0]

      const mapOptions = {
        center: {
          lat: this.latitude,
          lng: this.longitude
        },
        disableDefaultUI: true,
        zoomControl: true,
        zoom: 12,
        mapTypeId: googleMaps.MapTypeId.ROADMAP
      }

      this.map = new googleMaps.Map(this.renderRoot.querySelector('#map'), mapOptions)
    }).catch(console.error)
  }

  updated(props) {
    super.updated(props)

    if((props.has('longitude') || props.has('latitude')) && this.map) {
      debugger
    }
  }

  render () {
    return html`<div id="map" style="height: 100%"></div>`
  }
}

customElements.define('google-map', GoogleMap)
