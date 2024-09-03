import React from "react";
import { useState, useEffect } from "react";
import aboutData from "../../data/about.json";
import "./AboutPageCentre.css";
import { getSingle } from "../../utils/utils";

export const AboutPageCentre = () => {
  //
  const [aboutPhoto, setAboutPhoto] = useState([]);
  //
  const fetchPhotos = async () => {
    const photo = await getSingle("Xf7o2W7qgP0");
    console.log(photo);
    setAboutPhoto(photo.urls.full);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="aboutUsPageCentre">
      {aboutPhoto ? (
        <img
          href=""
          className="aboutPhoto"
          style={{ backgroundImage: `url(${aboutPhoto})` }}
        ></img>
      ) : null}

      <div className="AboutUsContainer">
        <div className="aboutContentContainer">
          <p className="aboutTitleContent">{aboutData.title}</p>
          <p className="aboutContentContent">{aboutData.content}</p>
          <p className="aboutRegardsContent">{aboutData.seeYou}</p>
          <p className="aboutRegardsContent">{aboutData.regards}</p>
          <p className="aboutRegardsContent">{aboutData.salonName}</p>
          <p className="aboutRegardsContent">{aboutData.owner}</p>
          <p className="aboutRegardsContent">{aboutData.name}</p>
        </div>
      </div>
    </div>
  );
};
