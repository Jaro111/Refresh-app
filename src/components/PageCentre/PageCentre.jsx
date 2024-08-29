import React, { useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import { getPhotos } from "../../utils/utils";
import "./PageCentre.css";
import logo from "../../assets/logo.png";

export const PageCentre = () => {
  //
  const [mainPhotos, setMainPhotos] = useState([]);
  //
  const fetchPhotos = async () => {
    const photos = await getPhotos(1, 1, "OHKDeR-dEfU");
    console.log(photos);
    setMainPhotos(photos);
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
        {mainPhotos ? (
          mainPhotos.map((item, index) => {
            return (
              <div className="mainImageContainer" key={index}>
                <img className="mainImage" href="" src={item.urls.full}></img>
              </div>
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};
