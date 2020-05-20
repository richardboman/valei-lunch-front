import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

const RatingStar = ({ checked = false, id, onClick }) => {
  return (
    <FontAwesomeIcon
      icon={!checked ? faStarRegular : faStarSolid}
      color="orange"
      onClick={onClick}
    />
  );
};

export default RatingStar;
