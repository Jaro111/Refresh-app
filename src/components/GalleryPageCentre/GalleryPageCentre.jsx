import React from "react";
import { useEffect, useState } from "react";
import { getPhotos } from "../../utils/utils";
import { GalleryCard } from "../GalleryCard/GalleryCard";
import "./GalleryPageCentre.css";

export const GalleryPageCentre = () => {
  //
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  //
  const fetchPhotos = async () => {
    const gallery = await getPhotos(10, 2, "V1M2AkYw5HQ");
    setGalleryPhotos(gallery);
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
            />
          );
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
