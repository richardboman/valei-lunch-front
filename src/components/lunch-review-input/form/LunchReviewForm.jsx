import React, { useState } from "react";
import TextInput from "../input/TextInput";
import TextArea from "../input/TextArea";
import RatingInput from "../rating/RatingInput";
import Button from "../../button/Button";
import {
  faUtensils,
  faComment,
  faTrophy,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./lunch-review-form-style.scss";

const _ = require("lodash");

const LunchReviewForm = ({ onSubmit }) => {
  const [restaurantInput, setRestaurantInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [ratingInput, setRatingInput] = useState(0);
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const _errors = { ...errors };
    _errors.restaurantInput = restaurantInput.length <= 3;
    _errors.commentInput = commentInput.length > 50;
    setErrors(_errors);
  };

  const handleSumbit = () => {
    validateFields();
    if (!_.isEmpty(errors)) {
      setRestaurantInput("");
      setCommentInput("");
      setRatingInput(0);
      onSubmit({ restaurantInput, commentInput, ratingInput });
    }
  };
  return (
    <div className="lunch-review-form__wrapper">
      <div className="lunch-review-form__title">
        <h5>Vart åt du lunch idag?</h5>
      </div>

      <div
        className={`input__wrapper input__wrapper--grow ${
          errors.restaurantInput ? "input__wrapper--error" : ""
        }`}
      >
        <div className="icon__wrapper">
          <FontAwesomeIcon className="input-icon" icon={faUtensils} />
        </div>
        <TextInput
          id="input-restaurant"
          placeholder="Restaurang"
          value={restaurantInput}
          onChange={setRestaurantInput}
        />
      </div>

      <div className="input__wrapper input__wrapper--no-border">
        <div className="icon__wrapper">
          <FontAwesomeIcon className="input-icon" icon={faTrophy} />
        </div>
        <RatingInput
          ratingInput={ratingInput}
          maxRating={5}
          onClick={setRatingInput}
        />
      </div>

      <div
        className={`input__wrapper__error-msg ${
          !errors.restaurantInput ? "hidden" : ""
        }`}
      >
        Skriv in minst 3 bokstäver!
      </div>
      <div
        className={`input__wrapper input__wrapper--comment ${
          errors.restaurantInput ? "input__wrapper--error" : ""
        }`}
      >
        <div className="icon__wrapper sicon__wrapper--comment">
          <FontAwesomeIcon className="input-icon" icon={faComment} />
        </div>
        <TextArea
          id="input-comment"
          placeholder="Kommentar"
          value={commentInput}
          onChange={setCommentInput}
        />
      </div>

      <div
        className={`input__wrapper__error-msg ${
          !errors.commentInput ? "hidden" : ""
        }`}
      >
        Kommentaren får vara högst 50 tecken!
      </div>

      <div className="lunch-review-form__btn-wrapper">
        <Button
          id="submit-button"
          text="Sätt betyg!"
          className="btn-submit"
          onClick={handleSumbit}
        />
      </div>
    </div>
  );
};

export default LunchReviewForm;
