import React from "react";
import Restaurant from "./restaurant/Restaurant";
import "./restaurant-top-list-style.scss";

const RestaurantTopList = ({ title, restaurants = [] }) => {
  return (
    <div className="top-list__wrapper">
      <div className="top-list__title">
        <h5>{title}</h5>
      </div>
      <div className="top-list__list">
        {restaurants.map((r, i) => (
          <div className="row">
            <div className="col number">
              <b>{i + 1}.</b>
            </div>
            <div className="col">
              <Restaurant r={r} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantTopList;
