import React from "react";
import { Container } from "reactstrap";
import Header from "./components/Header";
import Map from "./components/Map";
const MapDataApiAddress = "https://data.edmonton.ca/resource/87ck-293k.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { appName: "TrafficMap", coords: null };
  }

  componentWillMount() {
    if (this.state.coords === null)
      fetch(MapDataApiAddress)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.setState({ coords: res });
        });
  }
  render() {
    const { appName, coords } = this.state;
    return (
      <>
        <Header
          appName={appName}
          incidentsCount={(coords || []).length}
        ></Header>
        <button
          onClick={() => {
            let newcoords = JSON.parse(JSON.stringify(this.state.coords));
            newcoords[0].location.latitude -= 0.005;
            this.setState({
              coords: newcoords
            });
          }}
        >
          change state
        </button>
        <Container style={{ marginTop: "30px" }}>
          <Map data={coords} appName={appName} />
        </Container>
      </>
    );
  }
}

export default App;
