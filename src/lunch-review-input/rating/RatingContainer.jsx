import React from 'react';
import RatingStar from './RatingStar';
import './rating-style.scss';

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

  return <div className='rating-wrapper'>{stars}</div>;
};

export default RatingContainer;
