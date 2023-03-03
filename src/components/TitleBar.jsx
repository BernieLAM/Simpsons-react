import React, { Component } from "react";

class TitleBar extends Component {
  render() {
    return (
      <div className="menuBar">
        <div className="title">
          <h1>The Simpson Quote</h1>
        </div>
        <div className="inputBox">
          <input type="text"></input>{" "}
        </div>
        <div>
          <button></button>
        </div>
      </div>
    );
  }
}

export default TitleBar;

// click icon to like the character
// search character by name
// sort by A-Z or Z-A
