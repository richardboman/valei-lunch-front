import React, { useState } from "react";
import TextInput from "../input/TextInput";
import DatePicker from "../input/DatePicker";
import TextArea from "../input/TextArea";
import RatingContainer from "../rating/RatingContainer";
import Button from "../button/Button";
import { faUtensils, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./lunch-review-form-style.scss";

const LunchReviewForm = ({ onSubmit }) => {
  const [restaurantInput, setRestaurantInput] = useState("");
  const [dateInput, setDatetInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [ratingInput, setRatingInput] = useState(0);

  return (
    <div className="lunch-review-form__wrapper">
      <div className="info-wrapper">
        <p>Vart åt du lunch idag?</p>
      </div>
      <div className="input-wrapper">
        <FontAwesomeIcon
          className="input-icon"
          icon={faUtensils}
          color="#bf5a85"
        />
        <TextInput
          id="input-restaurant"
          placeholder="Restaurang"
          value={restaurantInput}
          onChange={setRestaurantInput}
        />
      </div>
      <div className="info-wrapper">
        <p>Vad ger du måltiden i betyg?</p>
        <RatingContainer
          ratingInput={ratingInput}
          maxRating={5}
          onClick={setRatingInput}
        />
      </div>
      <div className="input-wrapper">
        <FontAwesomeIcon
          className="input-icon"
          icon={faComment}
          color="#bf5a85"
        />
        <TextArea
          id="input-comment"
          placeholder="Kommentar"
          value={commentInput}
          onChange={setCommentInput}
        />
      </div>
      <div className="submit-wrapper">
        <Button
          id="submit-button"
          text="Sätt betyg!"
          className=""
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default LunchReviewForm;
