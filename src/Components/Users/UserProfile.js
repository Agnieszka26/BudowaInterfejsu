import "bootstrap";
import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useCookies} from "react-cookie";

const UserProfile = () => {
  const [cookies] = useCookies();

  return (
    <Container>
      <h2> User Detail </h2>
      <Container>
        <Col>
          <Row>
            <p> id: {cookies.id} </p>
          </Row>
          <Row>
            <p> name: {cookies.name}</p>
          </Row>
          <Row>
            <p> phone: {cookies.phone} </p>
          </Row>
          <Row>
            <p> car: {cookies.car} </p>
          </Row>
        </Col>
      </Container>
    </Container>
  );
};
export default UserProfile;
