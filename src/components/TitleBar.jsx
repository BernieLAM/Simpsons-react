import React, { Component } from "react";
import Sort from "./Sort";

class TitleBar extends Component {
  render() {
    return (
      <div className="menuBar">
        <div className="title">
          <h1>The Simpsons Quote</h1>
        </div>
        <div>
          <Sort />
        </div>
      </div>
    );
  }
}

export default TitleBar;

// click icon to like the character
// search character by name
// sort by A-Z or Z-A
