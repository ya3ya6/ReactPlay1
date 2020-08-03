import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
  // eslint-disable-next-line
  NavItem
} from "reactstrap";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isOpen, incidentsCount } = this.props;
    const { appName } = this.props;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{appName}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>1000 Traffic Incidents</NavItem> */}
            </Nav>
            <NavbarText style={{ color: "#333" }}>
              {incidentsCount} Traffic Incidents
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
      /*<div style={{ padding: "20px", textAlign: "center" }}>
        <Button color="danger" onClick={this.toggle}>
          cool
        </Button>
        <p style={{ marginTop: "10px" }}>
          {this.state.isOpen ? "True" : "False"}
        </p>
      </div>*/
    );
  }
}

export default Header;
