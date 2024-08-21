import React from "react";
import "./PageCentre.css";
import logo from "../../assets/logo.png";

export const PageCentre = () => {
  return (
    <div className="PageCentre">
      <div className="logoContainer">
        <img className="logoHome" href="" src={logo}></img>
      </div>
      <div>
        <p>blabla</p>
      </div>
    </div>
  );
};
