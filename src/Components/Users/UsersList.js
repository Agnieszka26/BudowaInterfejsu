import "bootstrap";
import React from "react";
import {Container, Table} from "react-bootstrap";
import User from "../Users/User";

const UserList = (users) => {
  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>Phone number</th>
              <th>Car</th>
            </tr>
          </thead>
          <tbody>
            {users.users.map((user) => {
              const {id, name, phone, car} = user;

              return (
                <User
                  id={id}
                  name={name}
                  phone={phone}
                  key={id + name}
                  car={car}
                />
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
export default UserList;
