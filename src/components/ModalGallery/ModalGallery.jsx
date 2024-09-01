import { useState, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./ModalGallery.css";

export const ModalGallery = (props) => {
  return (
    <div className="modalGalleryContainer">
      <div className="modalGalleryCloseContainer">
        <IoIosCloseCircleOutline
          className="modalGalleryCloseBtn"
          onClick={() => props.setIsModalGalleryVisible(false)}
        />
      </div>
      <div className="modalGalleryPhotoContainer">
        <img src={props.clickModalPhoto} className="modalGalleryPhoto"></img>
      </div>
      <div className="modalGalleryContentContainer"></div>
    </div>
  );
};
