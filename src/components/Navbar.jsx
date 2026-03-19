import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import user from "../assets/user.png";
import cart from "../assets/cart.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import NavbarBtn from "./NavbarBtn";
import OverSizedTshirt from "./OverSizedTshirt";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="navbar-toggle" onClick={toggleMenu}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>
      <div className="navbar-logo">
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li onClick={() => navigate("/oversized-tshirts")}>
            oversized t-shirts
          </li>
          <li onClick={() => navigate("products/polo-tshirts")}>polo t-shirts</li>
          <li onClick={() => navigate("products/hoodies")}>hoodies & sweatshirts</li>
          <li onClick={() => navigate("products/classic-fit-tshirts")}>
            classic fit t-shirts
          </li>
          <li onClick={() => navigate("products/bottom-wears")}>bottom wears</li>
          <li>merchandise</li>
        </ul>
      </div>
      <div className="navbar-search">
        <input type="search" placeholder="Try searching" />
      </div>
      <div className="navbar-btns">
        <Link to="/profile">
          <NavbarBtn image={user} name="profile" />
        </Link>
        <Link to="/cart">
          <NavbarBtn image={cart} name="cart" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
