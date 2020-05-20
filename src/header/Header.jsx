import React, { Component } from "react";
import "./header-style.scss";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header-wrapper">
        <div className="wrapper">
          <h1>Valei lunch</h1>
        </div>
      </div>
    );
  }
}

export default Header;
