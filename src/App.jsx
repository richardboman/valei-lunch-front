import React, { Component } from "react";
import Header from "./components/header/Header";
import LunchReviewForm from "./components/lunch-review-input/form/LunchReviewForm";
import LunchList from "./components/listings/lunch-list/LunchList";
import RestaurantTopList from "./components/listings/restaurant-top-list/RestaurantTopList";

import http from "./services/httpService.js";
import config from "./config/config";

const _ = require("lodash");
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lunches: [], restaurantsTop: [], isLoading: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Load all restaurants and lunches from the API
  async componentDidMount() {
    const restaurantsTop = await this.fetchTopList();
    const _lunches = await this.fetchLunches();
    const lunches = _.orderBy(_lunches, "date", "desc");
    this.setState({ restaurantsTop, lunches });
  }

  async fetchTopList() {
    return (await http.get(config.api.restaurants.getTop + "5")).data;
  }
  async fetchLunches() {
    return (await http.get(config.api.lunches.get)).data;
  }

  //Submit input of a new lunch review
  async handleSubmit(input) {
    this.setState({ isLoading: true });
    const data = {
      restaurant: {
        name: input.restaurantInput,
      },
      comment: input.commentInput,
      rating: input.ratingInput,
    };
    let { lunches } = { ...this.state };
    //Post lunch review, add the new lunch if successful and
    //update the top list by fetching again from the API
    http.post(config.api.lunches.post, data).then((response) => {
      lunches.push(response.data);
      lunches = _.orderBy(lunches, "date", "asc");
    });
    const restaurantsTop = await this.fetchTopList();
    this.setState({ lunches, restaurantsTop, isLoading: false });
  }

  render() {
    const { lunches, restaurantsTop, isLoading } = this.state;
    return (
      <div className="main">
        <Header />
        <LunchReviewForm onSubmit={this.handleSubmit} isLoading={isLoading} />
        <RestaurantTopList title="Topplistan!" restaurants={restaurantsTop} />
        <LunchList title={"Alla luncher"} lunches={lunches} />
      </div>
    );
  }
}

export default App;
