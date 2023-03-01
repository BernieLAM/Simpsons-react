import React, { Component } from "react";
import axios from "axios";
import Character from "./components/character";

class App extends Component {
  state = { simpsons: [] };

  async componentDidMount() {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=20`
    );

    this.setState({ simpsons: results.data });
  }

  render() {
    console.log(this.state.simpsons);
    const { simpsons } = this.state;

    //if data is here, loop over the data
    //think defensive check
    if (!simpsons) {
      return <h1>Waiting for data....</h1>;
    }

    return (
      <>
        {simpsons.map((index) => (
          <Character index={simpsons} />
        ))}
      </>
    );
  }
}

export default App;
