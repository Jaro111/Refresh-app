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
  const [galleryLength, setGalleryLength] = useState(8);
  const [clickModalPhoto, setModalFullPhoto] = useState("");
  const [isModalGalleryVisible, setIsModalGalleryVisible] = useState(false);
  const [limit, setLimit] = useState(8);
  const [skip, setSkip] = useState(0);
  const [isBlankDivVisible, setIsblankDivVisible] = useState(false);
  //
  const fetchPhotos = async () => {
    const gallery = await getGallery(limit, skip);
    setGalleryPhotos(gallery);
    setGalleryLength(gallery.length);
    console.log("length", galleryLength);
  };

  const clickPhoto = (item) => {
    setIsModalGalleryVisible(true);
    console.log(isModalGalleryVisible);
    setModalFullPhoto(item.url);
  };

  const nextClick = () => {
    if (galleryLength > 0) {
      setSkip(skip + 8);
      window.scrollTo(0, 0);
    }
    console.log(galleryLength);
  };
  const prevClick = () => {
    if (skip > 0) setSkip(skip - 8);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetchPhotos();
  }, [skip, limit, galleryLength]);

  return (
    <div className="galleryPageCentre">
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
      {galleryLength > 0 ? (
        <div className="nextPrevContainer">
          <button onClick={() => prevClick()} className="prevBtn">
            POPRZEDNIE
          </button>

          <button onClick={() => nextClick()} className="nextBtn">
            NASTEPNE
          </button>

          <div className="nextPrevContentContainer">
            <p className="nextPrevContent">{skip + 1} </p>
            <p className="nextPrevContent"> - </p>
            <p className="nextPrevContent"> {skip + galleryLength}</p>
          </div>
        </div>
      ) : (
        <div className="galleryBlankPageContainer">
          <p className="galleryBlankPage">Wiecej zdjec wkrótce 😊</p>
          <button onClick={() => prevClick()} className="prevBtn">
            POPRZEDNIE
          </button>
        </div>
      )}
    </div>
  );
};
//
