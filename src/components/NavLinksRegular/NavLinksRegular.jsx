import { NavLink } from "react-router-dom";
import "./NavLinksRegular.css";

export const NavLinksRegular = () => {
  return (
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
  );
};
