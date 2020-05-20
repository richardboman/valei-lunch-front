import React, { Component } from "react";
import Header from "./header/Header";
import LunchReviewForm from "./lunch-review-input/form/LunchReviewForm";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <LunchReviewForm />
      </div>
    );
  }
}

export default App;
