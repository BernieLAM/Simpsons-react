import React, { Component } from "react";
import axios from "axios";
import CharacterBox from "./components/CharacterBox";
import "./App.css";

class App extends Component {
  state = { simpsons: [] };

  onLike = (quote) => {
    const index = this.state.simpsons.findIndex(
      (simpsons) => simpsons.quote === quote
    ); //----- use something unique to findIndex to tell computer which one you click

    const simpsons = [...this.state.simpsons];
    simpsons[index].like = true;

    this.setState({ simpsons });
  };

  onDelete = (quote) => {
    console.log(quote);
    const index = this.state.simpsons.findIndex(
      (simpsons) => simpsons.quote === quote
    ); //----- delete function must exist where the state is, because the delete function changes the state
    //----- use something unique to findIndex to tell computer which one you delete
    console.log(index);
    const simpsons = [...this.state.simpsons];
    console.log(simpsons);

    //----- always use copy to manipulate things, won't mess up the orginal one
    //----- because of scope, here can use simspons as well, better than simpsonsCopy
    simpsons.splice(index, 1); //----- here using copy one to splice one
    console.log(simpsons);
    this.setState({ simpsons }); //----- send back to state
  };

  onSortAtoZ = () => {
    const simpsons = [...this.state.simpsons];

    simpsons.sort((item, nextItem) => {
      if (item.character < nextItem.character) return -1; //----- move forward
      if (item.character > nextItem.character) return 1; //----- move backward
      return 0; //----- leave it and stay
    });
    this.setState({ simpsons });
  };

  onSortZtoA = () => {
    const simpsons = [...this.state.simpsons];

    simpsons.sort((item, nextItem) => {
      if (item.character < nextItem.character) return 1; //----- move forward
      if (item.character > nextItem.character) return -1; //----- move backward
      return 0; //----- leave it and stay
    });
    this.setState({ simpsons });
  };

  newQuote = () => {
    this.componentDidMount();
  };

  onInput = (e) => {
    const userInput = e.target.value;
    this.setState({ userInput });
    //----- dont make copy and setstate coz it would be a new thing to send to state which replace the orginal one
    // const simpsons = [...this.state.simpsons];
    // this.setState({ simpsons: filtered });
  };

  async componentDidMount() {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=14`
    );

    this.setState({ simpsons: results.data });
  }

  render() {
    const { simpsons } = this.state;

    if (!simpsons) {
      return <div className="lds-ripple"></div>;
    }

    // for onInput
    let filtered = this.state.simpsons;
    if (this.state.userInput) {
      filtered = this.state.simpsons.filter((simpsons) => {
        return (
          simpsons.character.toLowerCase().includes(this.state.userInput) ||
          simpsons.character.toUpperCase().includes(this.state.userInput)
        );
      });
    }

    return (
      <>
        <div className="menuBar">
          <div className="title">
            <h1>The Simpsons Quote</h1>
          </div>
          <div className="onInput">
            <input
              onInput={this.onInput}
              type="text"
              placeholder="Search by name"
            ></input>
          </div>
          <div className="menuButton newQuote">
            <button onClick={this.newQuote}>New Quote</button>
          </div>
          <div className="menuButton onSortAtoZ">
            <button onClick={this.onSortAtoZ}>Sort by A-Z</button>
          </div>
          <div className="menuButton onSortZtoA">
            <button onClick={this.onSortZtoA}>Sort by Z-A</button>
          </div>
        </div>

        <div className="gridForCharacter">
          <CharacterBox
            simpsons={simpsons}
            onDelete={this.onDelete}
            filtered={filtered}
            onLike={this.onLike}
          />
        </div>
      </>
    );
  }
}

export default App;
