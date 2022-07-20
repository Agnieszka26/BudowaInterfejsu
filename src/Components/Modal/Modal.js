import {Card, Button} from "react-bootstrap";
import {useState} from "react";

function Modal() {
  const useInput = (opts) => {
    const [value, setValue] = useState("");
    const input = (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...opts}
      />
    );

    return [value, input];
  };
  const [title, titleInput] = useInput({placeholder: "Your Title"});
  const [content, contentInput] = useInput({placeholder: "Your Content"});
  const handleConfirm = (arg) => {
    console.log(arg);
  };
  const handleAbort = (arg) => {
    console.log(arg);
  };
  return (
    <>
      <Card style={{width: "50%"}}>
        <Card.Header>
          {titleInput}
          {contentInput}
        </Card.Header>
        <Card.Body>
          <Card.Title>Your title: {title}</Card.Title>
          <Card.Text>Your content: {content}</Card.Text>
        </Card.Body>
        <Button
          variant="success"
          value="Confirm"
          onClick={(e) => handleConfirm(e.target.value)}
        >
          Confirm
        </Button>
        <Button
          variant="danger"
          value="Abort"
          onClick={(e) => handleAbort(e.target.value)}
        >
          Abort
        </Button>
      </Card>
    </>
  );
}

export default Modal;
