import React, { Component } from "react";

class Character extends Component {
  render() {
    console.log(this.props.index);
    return (
      <div>
        <div>
          <p>Character: {this.props.index.character}</p>
        </div>
        <div>
          <p>{this.props.index.quote}</p>
        </div>
        <div>
          <img
            src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
            alt="{index.character}"
          ></img>
        </div>
      </div>
    );
  }
}

export default Character;
