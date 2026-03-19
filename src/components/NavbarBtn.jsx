import React from "react";
import "../styles/navbarBtns.css";

const NavbarBtn = ({ image, name }) => {
  return (
    <div className="navbar-btns">
      <img src={image} alt={name} />
    </div>
  );
};

export default NavbarBtn;
