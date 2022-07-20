import Snackbar from "../Components/Snackbar";
const About = () => {
  const time = 5;
  //for setting x axis it is: start center end, for y axis it is top center bottom
  const position = "end-top";
  let yourVariant = "";
  let variant = "";

  switch (yourVariant) {
    case "info":
      variant = "bg-info";
      break;
    case "error":
      variant = "bg-danger";
      break;
    case "warning":
      variant = "bg-warning";
      break;
    case "success":
      variant = "bg-success";
      break;
    default:
      variant = "bg-dark";
  }

  return (
    <>
      <h1> About </h1>
      <p> A tak na prawdę to Snackbar</p>
      <Snackbar time={time} position={position} yourType={variant} />
    </>
  );
};
export default About;
