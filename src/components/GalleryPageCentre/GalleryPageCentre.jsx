import React from "react";
import { useEffect, useState } from "react";
import { getPhotos } from "../../utils/utils";
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
    const gallery = await getPhotos(10, 2, "V1M2AkYw5HQ");
    console.log(gallery);
    setGalleryPhotos(gallery);
  };

  const clickPhoto = (item) => {
    setIsModalGalleryVisible(true);
    console.log(isModalGalleryVisible);
    setModalFullPhoto(item.urls.full);
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
              photo={item.urls.small}
              alt_description={item.alt_description}
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
