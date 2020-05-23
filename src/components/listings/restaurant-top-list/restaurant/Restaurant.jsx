import React from "react";
import RatingContainer from "../../ratings/RatingContainer";
import "./restaurant-style.scss";

import { faUtensils, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

var _ = require("lodash");

const Restaurant = ({ r }) => {
  return (
    <div className="restaurant-wrapper">
      <div className="title">
        <FontAwesomeIcon className="icon" icon={faUtensils} />
        <b>{r.name}</b>
      </div>
      <div className="col">
        <RatingContainer rating={_.meanBy(r.lunches, "rating")} maxRating={5} />
      </div>
      <div className="col col-date">
        <FontAwesomeIcon className="icon" icon={faCalendarAlt} />
        <span className="date">
          {new Date(_.minBy(r.lunches, "date").date).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default Restaurant;
