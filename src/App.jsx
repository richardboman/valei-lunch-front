import React, { Component } from 'react';
import Header from './header/Header';
import LunchReviewForm from './lunch-review-input/form/LunchReviewForm';
import http from './services/httpService.js';

class App extends Component {
  state = {};

  handleSubmit = (input) => {
    const data = {
      restaurant: {
        name: input.restaurantInput,
      },
      comment: input.commentInput,
      rating: input.ratingInput,
    };
    http.post(data);
    //console.log(data);
  };

  render() {
    return (
      <div>
        <Header />
        <LunchReviewForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
