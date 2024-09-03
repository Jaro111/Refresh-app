import React from "react";
import { useEffect, useState } from "react";
// import { getPhotos } from "../../utils/utils";
import { getGallery } from "../../utils/requests";
import { GalleryCard } from "../GalleryCard/GalleryCard";
import { ModalGallery } from "../ModalGallery/ModalGallery";
import "./GalleryPageCentre.css";

export const GalleryPageCentre = () => {
  //
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [clickModalPhoto, setModalFullPhoto] = useState("");
  const [isModalGalleryVisible, setIsModalGalleryVisible] = useState(false);
  //
  const fetchPhotos = async () => {
    const gallery = await getGallery(8, 0);
    setGalleryPhotos(gallery);
  };

  const clickPhoto = (item) => {
    setIsModalGalleryVisible(true);
    console.log(isModalGalleryVisible);
    setModalFullPhoto(item.url);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="galleryContainer">
      {galleryPhotos ? (
        galleryPhotos.map((item, index) => {
          return (
            <GalleryCard
              key={index}
              photo={item.url}
              // alt_description={item.name}
              clickPhoto={() => clickPhoto(item)}
            />
          );
        })
      ) : (
        <p>Loading</p>
      )}
      {isModalGalleryVisible && (
        <ModalGallery
          setIsModalGalleryVisible={setIsModalGalleryVisible}
          clickModalPhoto={clickModalPhoto}
        />
      )}
    </div>
  );
};
