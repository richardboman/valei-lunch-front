import React, { useState } from 'react';
import TextInput from '../input/TextInput';
import TextArea from '../input/TextArea';
import RatingContainer from '../rating/RatingContainer';
import Button from '../button/Button';
import {
  faUtensils,
  faComment,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './lunch-review-form-style.scss';

const LunchReviewForm = ({ onSubmit }) => {
  const [restaurantInput, setRestaurantInput] = useState('');
  const [commentInput, setCommentInput] = useState('');
  const [ratingInput, setRatingInput] = useState(0);

  return (
    <div className='lunch-review-form__wrapper'>
      <div className='info-wrapper'>
        <p className='lunch-review--title'>Vart åt du lunch idag?</p>
      </div>
      <div className='input-wrapper'>
        <FontAwesomeIcon className='input-icon' icon={faUtensils} />
        <TextInput
          id='input-restaurant'
          placeholder='Restaurang'
          value={restaurantInput}
          onChange={setRestaurantInput}
        />
      </div>
      <div className='input-wrapper'>
        <FontAwesomeIcon className='input-icon' icon={faTrophy} />
        <RatingContainer
          ratingInput={ratingInput}
          maxRating={5}
          onClick={setRatingInput}
        />
      </div>
      <div className='input-wrapper'>
        <FontAwesomeIcon className='input-icon' icon={faComment} />
        <TextArea
          id='input-comment'
          placeholder='Kommentar'
          value={commentInput}
          onChange={setCommentInput}
        />
      </div>

      <div className='submit-wrapper'>
        <Button
          id='submit-button'
          text='Sätt betyg!'
          className='btn-submit'
          onClick={() =>
            onSubmit({ restaurantInput, commentInput, ratingInput })
          }
        />
      </div>
    </div>
  );
};

export default LunchReviewForm;
