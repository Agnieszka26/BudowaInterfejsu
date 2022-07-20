import "bootstrap";
import React from "react";
import {useNavigate} from "react-router-dom";

const User = ({id, name, phone, car}) => {
  const navigate = useNavigate();

  const handleNavigate = (id, name, phone, car) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
    localStorage.setItem("car", car);
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
