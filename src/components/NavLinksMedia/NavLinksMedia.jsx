import { NavLinkMediaMenu } from "../NavLinkMediaMenu/NavLinkMediaMenu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import "./NavLinksMedia.css";

export const NavLinksMedia = () => {
  const [isMediaMenuVisible, setIsMediaMenuVisible] = useState(false);

  const clickIcon = () => {
    setIsMediaMenuVisible(!isMediaMenuVisible);
  };
  return (
    <div className="NavMediaContainer">
      {!isMediaMenuVisible ? (
        <div onClick={clickIcon} className="navbarHamburgerMenu">
          <div className="navbarHamburgerLines"></div>
          <div className="navbarHamburgerLines"> </div>
          <div className="navbarHamburgerLines"></div>
        </div>
      ) : (
        <IoIosCloseCircleOutline
          onClick={clickIcon}
          className="closeMediaMenuIcon"
        />
      )}

      {isMediaMenuVisible && <NavLinkMediaMenu clickIcon={clickIcon} />}
    </div>
  );
};
