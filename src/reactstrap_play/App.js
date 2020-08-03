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
        <Container style={{ marginTop: "30px" }}>
          <Map data={coords} />
        </Container>
      </>
    );
  }
}

export default App;
