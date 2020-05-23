import React from "react";
import Restaurant from "./restaurant/Restaurant";
import "./restaurant-top-list-style.scss";

const shortid = require("shortid");

//Displays a top-list of restaurants based on highest avg
//rating and longest time since last visit
const RestaurantTopList = ({ title, restaurants = [] }) => {
  //Check if any lunches in the list
  if (restaurants ? restaurants.length === 0 : restaurants) {
    return (
      <div className="top-list__wrapper">
        <div className="top-list__title">
          <h5>{title}</h5>
          <p>Det finns inga luncher inlagda ännu. Vart åt du idag?</p>
        </div>
      </div>
    );
  }
  return (
    <div className="top-list__wrapper">
      <div className="top-list__title">
        <h5>{title}</h5>
      </div>
      <div className="top-list__list">
        {restaurants.map((r, i) => (
          <div key={shortid.generate()} className="row">
            <div key={shortid.generate()} className="col number">
              <b>{i + 1}.</b>
            </div>
            <div key={shortid.generate()} className="col">
              <Restaurant key={shortid.generate()} r={r} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantTopList;
