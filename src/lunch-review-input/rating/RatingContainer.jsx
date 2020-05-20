import React from "react";
import RatingStar from "./RatingStar";

const RatingContainer = ({ ratingInput, maxRating, onClick }) => {
  let stars = [];
  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <RatingStar
        checked={ratingInput >= i}
        id={i}
        onClick={() => onClick(i)}
      />
    );
  }

  return <div>{stars}</div>;
};

export default RatingContainer;
