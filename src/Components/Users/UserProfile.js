import "bootstrap";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";


const UserProfile = () => {
  const id = localStorage.getItem("id");
  const name = localStorage.getItem("name");
  const phone = localStorage.getItem("phone");
  const car = localStorage.getItem("car");
  return (
    <Container>
      <h2> User Detail </h2>
      <Container>
        <Col>
          <Row>
            <p> id: {id} </p>
          </Row>
          <Row>
            <p> name: {name}</p>
          </Row>
          <Row>
            <p> phone: {phone} </p>
          </Row>
          <Row>
            <p> car: {car} </p>
          </Row>
        </Col>
      </Container>
    </Container>
  );
};
export default UserProfile;
