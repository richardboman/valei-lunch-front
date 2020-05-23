import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as starSolid,
  faStarHalfAlt as starHalf,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons";

const shortid = require("shortid");

//Rounds a number to nearest 0.5
const roundToHalf = (num) => {
  return Math.round(num * 2) / 2;
};

//Displays rating in the form of stars in half-increments
const RatingContainer = ({ rating, maxRating, className }) => {
  const roundedRating = roundToHalf(rating);
  let stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(
      <FontAwesomeIcon
        key={shortid.generate()}
        icon={starSolid}
        color="orange"
        size="xs"
      />
    );
    if (roundedRating - i === 0.5) {
      stars.push(
        <FontAwesomeIcon
          key={shortid.generate()}
          icon={starHalf}
          color="orange"
          size="xs"
        />
      );
    }
  }
  const remainingStars = maxRating - roundedRating;
  for (let i = 1; i <= remainingStars; i++) {
    stars.push(
      <FontAwesomeIcon
        key={shortid.generate()}
        icon={starRegular}
        color="orange"
        size="xs"
      />
    );
  }
  return <div className={className}>{stars}</div>;
};

export default RatingContainer;
