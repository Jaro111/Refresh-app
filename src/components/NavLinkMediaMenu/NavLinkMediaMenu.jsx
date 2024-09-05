import { NavLink } from "react-router-dom";
import "./NavLinkMediaMenu.css";

export const NavLinkMediaMenu = (props) => {
  return (
    <div className="mediaMenuContainer">
      <div className="navLinkMediaContainer">
        <NavLink onClick={props.clickIcon} className="navLink" to="/">
          Strona Główna
        </NavLink>

        <NavLink onClick={props.clickIcon} className="navLink" to="/gallery">
          Galeria
        </NavLink>

        <NavLink onClick={props.clickIcon} className="navLink" to="/aboutUs">
          O nas
        </NavLink>

        <NavLink onClick={props.clickIcon} className="navLink" to="/pricing">
          Cennik
        </NavLink>
      </div>
    </div>
  );
};
