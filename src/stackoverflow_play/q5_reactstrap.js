// https://stackoverflow.com/questions/63257030/react-bootstrap-v3-make-row-have-height-of-max-height-component-in-two-column-v/63257513#63257513
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Component = props => (
  <div
    style={{
      height: props.height ? props.height + "px" : "auto",
      background: "#35f",
      margin: "10px",
      color: "white"
    }}
  >
    component
  </div>
);
export default () => (
  <Container fluid>
    <Row>
      <Col sm={6}>
        <Component height={200} />
      </Col>
      <Col sm={6}>
        <Component height={100} />
      </Col>
      <Col sm={6}>
        <Component height={50} />
      </Col>
      <Col sm={6}>
        <Component />
      </Col>
    </Row>
  </Container>
);
