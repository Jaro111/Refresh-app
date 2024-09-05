import React from "react";
import { NavLinksRegular } from "../NavLinksRegular/NavLinksRegular";
import { NavLinksMedia } from "../NavLinksMedia/NavLinksMedia";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="NavbarSpace">
      <NavLinksRegular />
      <NavLinksMedia />
    </div>
  );
};
