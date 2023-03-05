import React, { Component } from "react";
import "./App.css";
import CharacterCards from "./components/CharacterCards";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <CharacterCards />;
      </>
    );
  }
}

export default App;
