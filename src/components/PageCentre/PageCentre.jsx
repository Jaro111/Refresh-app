import React, { useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import { getSingle } from "../../utils/utils";
import "./PageCentre.css";
import logo from "../../assets/glow_logo.jpg";

export const PageCentre = () => {
  //
  const [mainPhoto, setMainPhoto] = useState("");
  //
  const fetchPhotos = async () => {
    const photo = await getSingle("LiUUlnsqwxY");
    console.log(photo.urls);
    setMainPhoto(photo.urls.full);
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
            <img className="mainImage" href="" src={mainPhoto}></img>
          </div>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};
