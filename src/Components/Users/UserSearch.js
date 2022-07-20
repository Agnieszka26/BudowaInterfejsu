import {useContext, useState, useRef} from "react";
import {ContextList} from "../Context";
import {Form, Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {BsSearch} from "react-icons/bs";
import {GrPowerReset} from "react-icons/gr";

const UserSearch = () => {
  const context = useContext(ContextList);
  const {setSearchTerm} = context;
  const [query] = useState();
  const refInput = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(refInput.current.value);
  };
  const handleReset = () => {
    refInput.current.value = "";
    setSearchTerm(refInput.current.value);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Form.Control
            ref={refInput}
            type="search"
            placeholder="Search term..."
            value={query}
          />
          <Container className="d-flex justify-content-center pt-2">
            <Button variant="success" type="submit" className="px-3 mx-3">
              <BsSearch />
            </Button>
            <Button
              variant="danger"
              type="reset"
              className="px-3 mx-3"
              onClick={handleReset}
            >
              <GrPowerReset />
            </Button>
          </Container>
        </Container>
      </Form>
    </>
  );
};
export default UserSearch;
