import React, { useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import { getSingle } from "../../utils/utils";
import "./PageCentre.css";
import logo from "../../assets/glow_logo.jpg";

export const PageCentre = () => {
  //
  const [mainPhoto, setMainPhoto] = useState("");
  const [isDesignerVisible, setIsDesignerVisible] = useState(false);
  //
  const fetchPhotos = async () => {
    const photo = await getSingle("EX1uC6ZVu7w");
    setMainPhoto(photo.urls.regular);
  };

  const showDesigner = () => {
    setIsDesignerVisible(true);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="PageCentre">
      <div className="logoContainer">
        <img className="logoHome" href="" src={logo}></img>
      </div>
      <div className="mianImagesSpaceContainer">
        {mainPhoto ? (
          <div className="mainImageContainer">
            <img
              style={{ backgroundImage: `url(${mainPhoto})` }}
              className="mainImage"
              href=""
            ></img>
          </div>
        ) : (
          <p>Loading</p>
        )}
        <div
          className="bottomNoteContainer"
          style={{
            bottom: isDesignerVisible ? "60px" : "50px",
          }}
        >
          <p
            style={{ display: isDesignerVisible ? "none" : "block" }}
            onClick={showDesigner}
            className="bottomNoteContentClick"
          >
            {" "}
            Created by
          </p>
          <div
            className="bottomNoteContentLinkContainer"
            style={{
              display: isDesignerVisible ? "block" : "none",
            }}
          >
            <p className="bottomNoteContentLink">https://github.com/Jaro111</p>
            <p className="bottomNoteContentLink">jarokark@protonmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
