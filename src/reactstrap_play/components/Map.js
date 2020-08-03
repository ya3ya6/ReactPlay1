import React, { Component } from "react";
import ReactMapGL, {
  setRTLTextPlugin,
  NavigationControl,
  Marker
} from "react-map-gl";
import Pin from "./Pin.js";
setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
  null,
  true
);
export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "fit",
        // latitude: 32.71381328503626,
        // longitude: 51.66317365793152,
        latitude: 53.52666097368566,
        longitude: -113.52188775920357,
        zoom: 10,
        height: 500
      }
      /*coords: [
        {
          location: [latitude: 32.71091328503626,
          longitude: 51.65657365793152],
          title: "Home"
        },
        {
          location: [latitude: 32.71281328503626,
          longitude: 51.65917365793152],
          title: "Park"
        }
      ]*/
    };
  }
  render() {
    const { viewport } = this.state;
    const { data: coords } = this.props;
    return (
      <ReactMapGL
        mapboxApiAccessToken="pk.eyJ1IjoieWEzeWE2IiwiYSI6ImNrZGVoYnYzMjBtYXkyd25ybnQ4d3RsNjkifQ.AJLX8R_aReMw7phl5OcfRQ"
        {...viewport}
        onViewportChange={nextViewport =>
          this.setState({ viewport: { ...nextViewport, width: "fit" } })
        }
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
      >
        {(coords || []).map((coord, index) => (
          <Marker
            latitude={Number(coord.location.latitude)}
            longitude={Number(coord.location.longitude)}
          >
            <Pin data={{ text: coord.closure }} markertitle={index} />
          </Marker>
        ))}

        <div style={{ position: "absolute", right: 0, bottom: 0 }}>
          <NavigationControl />
        </div>
      </ReactMapGL>
    );
  }
}
