import "bootstrap";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

const User = ({id, name, phone, car}) => {
  const [cookies, setCookie] = useCookies(["id", "name", "phone", "car"]);
  const navigate = useNavigate();

  const handleSetCookies = (id, name, phone, car) => {
    setCookie("id", id, {path: "/"});
    setCookie("name", name, {path: "/"});
    setCookie("phone", phone, {path: "/"});
    setCookie("car", car, {path: "/"});
  };
  const handleNavigate = (id, name, phone, car) => {
    handleSetCookies(id, name, phone, car);
    navigate(`/user-profile/${id}`);
  };
  return (
    <>
      <tr onClick={() => handleNavigate(id, name, phone, car)}>
        <td>{id}</td>

        <td>{name}</td>

        <td>{phone}</td>

        <td>{car}</td>
      </tr>
    </>
  );
};
export default User;
