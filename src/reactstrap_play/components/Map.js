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
      markers: []
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
    let { markers: oldmarkers } = this.state;
    oldmarkers.forEach(marker => marker.remove());
    const { map } = this.state;
    const { data: coords } = this.props;
    let markers = [];
    coords.forEach(coord => {
      let marker = new MapboxGL.Marker().setLngLat([
        coord.location.longitude,
        coord.location.latitude
      ]);
      marker.addTo(map);
      markers.push(marker);
    });
    this.setState({ markers: markers });
  }
  componentDidUpdate(prevProps) {
    const { data } = this.props;
    const { map } = this.state;
    if (JSON.stringify(prevProps.data) !== JSON.stringify(data)) {
      if (map && data) this.addMarkers();
    }
  }
  render() {
    return (
      <div id="map" style={{ height: "490px" }}>
        {}
      </div>
    );
  }
}
