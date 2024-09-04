import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

export const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="NavbarSpace">
      <div className="navLinksContainer">
        <NavLink className="navLink" to="/">
          Strona Główna
        </NavLink>

        <NavLink className="navLink" to="/gallery">
          Galeria
        </NavLink>

        <NavLink className="navLink" to="/aboutUs">
          O nas
        </NavLink>

        <NavLink className="navLink" to="/pricing">
          Cennik
        </NavLink>
      </div>
    </div>
  );
};
