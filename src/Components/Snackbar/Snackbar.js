import {Toast, Button} from "react-bootstrap";
import {useState, useEffect} from "react";

const Toaster = ({time}) => {
  return (
    <>
      <Toast>
        <Toast.Header>
          <small> It will be shown for {time} sec.</small>
        </Toast.Header>
        <Toast.Body>Very funny message</Toast.Body>
      </Toast>
    </>
  );
};

const Snackbar = ({time, position, yourType}) => {
  const [showToaster, setShowToaster] = useState(false);
  const stopShowingToasterAfterSomeTime = (time) => {
    setTimeout(() => setShowToaster(false), time * 1000);
  };
  useEffect(() => {
    stopShowingToasterAfterSomeTime(time);
  });
  const positionSegmentOneX = position.split("-")[0];
  const positionSegmentTwoY = position.split("-")[1];

  console.log("yourType", yourType);

  const positionX =
    positionSegmentOneX === "center"
      ? "start-50 translate-middle-x"
      : positionSegmentOneX + "-0";
  const positionY =
    positionSegmentTwoY === "center"
      ? "top-50 translate-middle-y"
      : positionSegmentTwoY + "-0";

  const classNameToaster = `position-absolute ${positionY} ${positionX} `;
  const isOnVeryCenter =
    positionSegmentOneX === "center" && positionSegmentTwoY === "center"
      ? "position-absolute top-50 start-50 translate-middle"
      : classNameToaster;

  return (
    <div className="position-relative" style={{height: "100vh"}}>
      <Button variant="warning" onClick={() => setShowToaster(true)}>
        Show me Toaster
      </Button>
      {showToaster && (
        <div className={isOnVeryCenter + yourType}>
          <Toaster time={time} />
        </div>
      )}
    </div>
  );
};

export default Snackbar;
