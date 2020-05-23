import React, { Component } from "react";
import Lunch from "./lunch/Lunch";
import Button from "../../button/Button";
import { paginate } from "../../../common/paginate.js";
import "./lunch-list-style.scss";

import SortButton from "./sort/SortButton";

var _ = require("lodash");

class LunchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSortProperty: "",
      sortByAsc: { restaurant: { name: true }, rating: true, date: true },
      lunches: props.lunches,
      windowWidth: window.innerWidth,
      currentPage: 1,
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleResize);
  };

  handleResize = (e) => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  };

  setCurrentPage = (page) => {
    this.setState({ currentPage: page });
  };

  sortBy = (property) => {
    const { lunches: _lunches, sortByAsc } = { ...this.state };
    const orderBy = _.get(sortByAsc, property) ? "asc" : "desc";
    _.set(sortByAsc, property, !_.get(sortByAsc, property));
    const lunches = _.orderBy(_lunches, property, orderBy);
    this.setState({ lunches, sortByAsc, activeSortProperty: property });
  };

  render() {
    const { lunches, currentPage, windowDimensions, sortByAsc } = this.state;
    //Set pages for pagination based on window size
    const pageSize = windowDimensions > 500 ? 10 : 5;
    const totalPages = Math.ceil(lunches.length / pageSize);
    const { title } = this.props;
    return (
      <div className="lunch-list__wrapper">
        <div className="lunch-list__title">
          <h5>{title}</h5>
        </div>
        <div className="sort__wrapper">
          <div class="title-xs">
            <b>Sortera på:</b>
          </div>
          <div className="sort-buttons__wrapper">
            <SortButton
              className="btn-sort"
              text="Namn"
              sortByAsc={sortByAsc.restaurant.name}
              onClick={() => this.sortBy("restaurant.name")}
            />
            <SortButton
              className="btn-sort"
              text="Omdöme"
              sortByAsc={sortByAsc.rating}
              onClick={() => this.sortBy("rating")}
            />
            <SortButton
              className="btn-sort"
              text="Datum"
              sortByAsc={sortByAsc.date}
              onClick={() => this.sortBy("date")}
            />
          </div>
        </div>
        <div className="lunch-list__list">
          {paginate(lunches, currentPage, pageSize).map((l, i) => (
            <div className="row">
              <Lunch lunch={l} />
            </div>
          ))}
        </div>
        <div className="lunch-list__btn-wrapper">
          <Button
            text={currentPage < totalPages ? "Ladda fler" : "Dölj"}
            onClick={() => {
              currentPage < totalPages
                ? this.setCurrentPage(currentPage + 1)
                : this.setCurrentPage(1);
            }}
            className="btn-load-more"
          />
        </div>
      </div>
    );
  }
}

export default LunchList;
