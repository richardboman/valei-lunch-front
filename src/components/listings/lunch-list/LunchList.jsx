import React, { Component } from "react";
import Lunch from "./lunch/Lunch";
import Button from "../../common/button/Button";
import SortButton from "./sort/SortButton";
import { faSort } from "@fortawesome/free-solid-svg-icons";

import { paginate } from "../../../common/paginate.js";
import "./lunch-list-style.scss";

var _ = require("lodash");
const shortid = require("shortid");

//Displays list of lunches
//Paginates the results and displays button to load more
//results
//Sort list ASC or DESC on date/restaurant/rating
class LunchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortByAsc: { restaurant: { name: true }, rating: true, date: false },
      lunches: props.lunches,
      windowWidth: window.innerWidth,
      currentPage: 1,
    };
  }

  //Add event listener for window size
  //Used for pagination
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

  //Update state with new lunches if any changes in props
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.lunches !== this.props.lunches) {
      this.setState({ lunches: this.props.lunches });
    }
  }

  setCurrentPage = (page) => {
    this.setState({ currentPage: page });
  };

  //Sorts on restaurant/rating/date and toggles ASC/DESC for the
  //property
  sortBy = (property) => {
    const { lunches: _lunches, sortByAsc } = { ...this.state };
    const orderBy = _.get(sortByAsc, property) ? "asc" : "desc";
    _.set(sortByAsc, property, !_.get(sortByAsc, property));
    const lunches = _.orderBy(_lunches, property, orderBy);
    this.setState({ lunches, sortByAsc });
  };

  render() {
    const {
      lunches,
      currentPage,
      windowDimensions,
      sortByAsc,
      activeSort,
    } = this.state;
    //Set pages for pagination based on window size
    const pageSize = windowDimensions > 500 ? 10 : 5;
    const totalPages = Math.ceil(lunches.length / pageSize);
    const { title } = this.props;

    //Check if any lunches in the list
    if (lunches ? lunches.length === 0 : lunches) {
      return (
        <div className="lunch-list__wrapper">
          <div className="lunch-list__title">
            <h5>{title}</h5>
            <p>Det finns inga luncher inlagda ännu. Vart åt du idag?</p>
          </div>
        </div>
      );
    }

    return (
      <div className="lunch-list__wrapper">
        <div className="lunch-list__title">
          <h5>{title}</h5>
        </div>
        <div className="sort__wrapper">
          <div className="title">
            <b>Sortera:</b>
          </div>
          <div className="sort-buttons__wrapper">
            <SortButton
              className="btn-sort"
              text="Omdöme"
              sortByAsc={sortByAsc.rating}
              onClick={() => this.sortBy("rating")}
              icon={faSort}
            />
            <SortButton
              className="btn-sort"
              text="Restaurang"
              sortByAsc={sortByAsc.restaurant.name}
              onClick={() => this.sortBy("restaurant.name")}
              icon={faSort}
            />
            <SortButton
              className="btn-sort"
              text="Datum"
              sortByAsc={sortByAsc.date}
              onClick={() => this.sortBy("date")}
              icon={faSort}
            />
          </div>
        </div>
        <div className="lunch-list__list">
          {paginate(lunches, currentPage, pageSize).map((l) => (
            <div key={shortid.generate()} className="row">
              <Lunch key={shortid.generate()} lunch={l} />
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
