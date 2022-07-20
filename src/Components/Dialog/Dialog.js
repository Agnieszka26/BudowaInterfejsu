import {Button} from "react-bootstrap";
import "bootstrap";
import {useState} from "react";
import Modal from "../Modal/Modal";

function Dialog() {
  const [showModal, setShowModal] = useState(false);
  const modalOn = () => {
    setShowModal(true);
  };
  const modalOff = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Button variant="primary" className="px-4" onClick={() => modalOn()}>
          Click me
        </Button>
      </div>
      {showModal && (
        <>
          <div className="d-flex justify-content-center align-items-center">
            <Button variant="danger" className="px-5" onClick={() => modalOff()}>
              x
            </Button>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Modal />
          </div>
        </>
      )}
    </>
  );
}

export default Dialog;
