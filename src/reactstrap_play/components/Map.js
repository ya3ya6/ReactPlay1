import React, { Component } from "react";
import MapboxGL from "mapbox-gl";
const MAPBOXTOKEN =
  "pk.eyJ1IjoieWEzeWE2IiwiYSI6ImNrZGVoYnYzMjBtYXkyd25ybnQ4d3RsNjkifQ.AJLX8R_aReMw7phl5OcfRQ";

/*import Pin from "./Pin.js";*/
/*setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
  null,
  true
);*/
export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "fit",
        center: [-113.52188775920357, 53.52666097368566],
        zoom: 10,
        height: 500
      },
      map: null,
      markersAdded: false
    };
  }
  componentDidMount() {
    MapboxGL.accessToken = MAPBOXTOKEN;
    this.initializeMap();
  }
  initializeMap() {
    let map = new MapboxGL.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      ...this.state.viewport
    });
    let nav = new MapboxGL.NavigationControl();
    map.addControl(nav, "bottom-right");
    this.setState({ map });
  }
  addMarkers() {
    const { map } = this.state;
    const { data: coords } = this.props;
    coords.forEach(coord => {
      new MapboxGL.Marker()
        .setLngLat([coord.location.longitude, coord.location.latitude])
        .addTo(map);
    });
    this.setState({ markersAdded: true });
  }
  render() {
    const { data: coords } = this.props;
    const { map, markersAdded } = this.state;
    if (map && !markersAdded && coords) this.addMarkers();
    return (
      <div id="map" style={{ height: "490px" }}>
        {}
      </div>
    );
  }
}
