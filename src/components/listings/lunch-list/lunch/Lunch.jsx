import React from "react";
import RatingContainer from "../../ratings/RatingContainer";
import "./lunch-style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

//Displays a lunch review with restaurant name, date, rating
//and comment
const Lunch = ({ lunch }) => {
  return (
    <div className="restaurant-wrapper">
      <div className="title">
        <FontAwesomeIcon className="icon" icon={faUtensils} />
        <b>{lunch.restaurant.name}</b>
      </div>
      <div className="col">
        <RatingContainer rating={lunch.rating} maxRating={5} />
      </div>
      <div className="col col-date">
        <FontAwesomeIcon className="icon" icon={faCalendarAlt} />
        <span className="date">
          {new Date(lunch.date).toLocaleDateString()}
        </span>
      </div>
      <div className="comment">
        {lunch.comment.length > 0 ? lunch.comment : "-"}
      </div>
    </div>
  );
};

export default Lunch;
