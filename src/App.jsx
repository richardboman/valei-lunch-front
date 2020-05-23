import React, { Component } from "react";
import Header from "./components/header/Header";
import LunchReviewForm from "./components/lunch-review-input/form/LunchReviewForm";
import LunchList from "./components/listings/lunch-list/LunchList";
import RestaurantTopList from "./components/listings/restaurant-top-list/RestaurantTopList";

import http from "./services/httpService.js";
import config from "./config/config";

const _ = require("lodash");
class App extends Component {
  state = { lunches: [], restaurantsTop: [] };

  async componentDidMount() {
    const restaurantsTop = (await http.get(config.api.restaurants.getTop + "5"))
      .data;
    const _lunches = (await http.get(config.api.lunches.get)).data;
    const lunches = _.orderBy(_lunches, "date", "desc");
    this.setState({ restaurantsTop, lunches });
  }

  handleSubmit = (input) => {
    const data = {
      restaurant: {
        name: input.restaurantInput,
      },
      comment: input.commentInput,
      rating: input.ratingInput,
    };
    http.post(config.api.lunches.post, data);
  };

  render() {
    const { lunches, restaurantsTop } = this.state;
    if (lunches.length === 0 && restaurantsTop.length === 0) return <div></div>;
    return (
      <div className="main">
        <Header />
        <LunchReviewForm onSubmit={this.handleSubmit} />
        <RestaurantTopList
          title="Topplistan!"
          restaurants={this.state.restaurantsTop}
        />
        <LunchList title={"Alla luncher"} lunches={this.state.lunches} />
      </div>
    );
  }
}

export default App;
