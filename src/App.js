import React, { Component } from "react";
import "./App.css";

import CharacterCards from "./components/CharacterCards";
import TitleBar from "./components/TitleBar";
// import TitleBar from "./components/TitleBar";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <TitleBar />
        <CharacterCards />;
      </>
    );
  }
}

export default App;
