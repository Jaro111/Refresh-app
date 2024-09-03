import { useState } from "react";
import "./GalleryCard.css";

export const GalleryCard = (props) => {
  return (
    <div className="GalleryCard">
      <div className="galleryImageContainer">
        <img
          className="galleryImage"
          href=""
          src={props.photo}
          // alt={props.alt_description}
          onClick={props.clickPhoto}
        ></img>
      </div>
    </div>
  );
};
