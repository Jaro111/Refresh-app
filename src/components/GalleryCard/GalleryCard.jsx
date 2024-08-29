import "./GalleryCard.css";

export const GalleryCard = (props) => {
  return (
    <div className="GalleryCard">
      <div className="galleryImageContainer">
        <img
          className="galleryImage"
          href=""
          src={props.photo}
          alt={props.alt_description}
        ></img>
      </div>
    </div>
  );
};
