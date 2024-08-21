import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="NavbarSpace">
      <div className="navLinksContainer">
        <NavLink className="navLink" to="/">
          Home
        </NavLink>

        <NavLink className="navLink" to="/gallery">
          Gallery
        </NavLink>

        <NavLink className="navLink" to="/aboutUs">
          About Us
        </NavLink>

        <NavLink className="navLink" to="/pricing">
          Pricing
        </NavLink>
      </div>
    </div>
  );
};
