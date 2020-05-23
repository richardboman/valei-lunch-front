import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

//Represents one rating star for the rating input
const RatingStar = ({ checked = false, onClick }) => {
  return (
    <FontAwesomeIcon
      icon={!checked ? faStarRegular : faStarSolid}
      color="orange"
      onClick={onClick}
    />
  );
};

export default RatingStar;
