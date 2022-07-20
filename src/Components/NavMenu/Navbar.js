import Menu from "./NavMenu";
import Button from "react-bootstrap/esm/Button";
import {HiMenu} from "react-icons/hi";
import {useState} from "react";

const NavBar = () => {
  const [isVisibeMenu, setIsVisibeMenu] = useState(false);
  const handleVisibleMenu = () => {
    setIsVisibeMenu((prev) => !prev);
  };
  return (
    <div
      className="d-flex justify-content-between"
      style={{backgroundColor: "#b8dbcb", height: "3rem"}}
    >
      {isVisibeMenu ? <Menu /> : <div></div>}
      <Button variant="dark" onClick={() => handleVisibleMenu()}>
        <HiMenu />
      </Button>
    </div>
  );
};

export default NavBar;
