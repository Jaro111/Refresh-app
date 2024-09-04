import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";

import "./Footer.css";

export const Footer = () => {
  return (
    <div className="FooterSpace">
      <div className="footerIcons">
        <div className="facebookIconContainer">
          <a
            target="blank"
            href="https://www.facebook.com/people/Glow-Paznokcie-Rosnowo/61556554966373/"
          >
            <FaFacebook className="facebookIcon" />
          </a>
        </div>
        <div className="locationIconContainer">
          <a target="_blank" href="https://maps.app.goo.gl/ZQzstpXX4gWEiBf3A">
            <FaLocationDot className="locationIcon" />
          </a>
        </div>
        <div className="callIconContainer">
          <IoCallSharp className="callIcon" />
          <p className="callContent">+48 0913210597</p>
        </div>
      </div>
    </div>
  );
};
