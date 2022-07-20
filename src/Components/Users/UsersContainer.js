import React, {useContext, useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import {ContextList} from "../Context";
import UserList from "../Users/UsersList";
import UserSearch from "./UserSearch";

const UserContainer = () => {
  const context = useContext(ContextList);
  const {searchTerm} = context;
  const [data, setData] = useState([]);
  const [result, setResult] = useState([]);
  const [isError, setIsError] = useState(false);

  const fetchUsers = async () => {
    try {
      let response = await fetch("/users.json");
      if (response.ok) {
        let data = await response.json();
        setData(data);
      } else {
        // eslint-disable-next-line no-throw-literal
        throw "Error fetching users list";
      }
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setResult(
      data?.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  return (
    <>
      <Container className="pt-5">
        <UserSearch />
        <h3 className="text-center py-5">List of Users</h3>
        {isError ? (
          <p>Something went wrong </p>
        ) : (
          data && <UserList users={result} />
        )}
      
      </Container>
    </>
  );
};
export default UserContainer;
