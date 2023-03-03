import React, { Component } from "react";
import EachCharacter from "./EachCharacter";

class AllCharacter extends Component {
  render() {
    return (
      <div className="gridForCharacter">
        {this.props.simpsons.map((item) => (
          <EachCharacter item={item} /> //----- item={simpsons} is the whole thing, the item in character is the item in here
        ))}
      </div>
    );
  }
}

export default AllCharacter;
