import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import AllCharacter from "./components/AllCharacter";
// import TitleBar from "./components/TitleBar";

class App extends Component {
  state = { simpsons: [] };

  async componentDidMount() {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=20`
    );

    this.setState({ simpsons: results.data });
  }

  render() {
    const { simpsons } = this.state;

    if (!simpsons) {
      return <div className="lds-ripple"></div>;
    }

    return (
      <>
        {/* <TitleBar /> */}
        <AllCharacter simpsons={simpsons} />;
      </>
    );
  }
}

export default App;
