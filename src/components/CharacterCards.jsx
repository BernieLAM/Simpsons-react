import React, { Component } from "react";
import axios from "axios";
import LikesImage from "./LikesImage";

class CharacterCards extends Component {
  state = { simpsons: [] };

  onDelete = (quote) => {
    const index = this.state.simpsons.findIndex(
      (simpsons) => simpsons.quote === quote
    ); //----- delete function must exist where the state is, because the delete function changes the state
    //----- use something unique to findIndex to tell computer which one you delete

    const simpsons = [...this.state.simpsons];
    //----- always use copy to manipulate things, won't mess up the orginal one
    //----- because of scope, here can use simspons as well, better than simpsonsCopy
    simpsons.splice(index, 1); //----- here using copy one to splice one
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
    const simpsons = [...this.state.simpsons];
    const userInput = e.target.value;

    const filtered = simpsons.filter((simpsons) => {
      return simpsons.character.toLowerCase().includes(userInput);
    });
    this.setState({ simpsons: filtered });
    // console.log(filtered);
  };

  async componentDidMount() {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=40`
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
        <div className="menuBar">
          <div className="title">
            <h1>The Simpsons Quote</h1>
          </div>
          <div>
            <button onClick={this.onSortAtoZ}>Sort by A-Z</button>
          </div>
          <div>
            <button onClick={this.onSortZtoA}>Sort by Z-A</button>
          </div>
          <div>
            <button onClick={this.newQuote}>New Quote</button>
          </div>
          <div>
            <input onInput={this.onInput} type="text"></input>
          </div>
        </div>

        <div className="gridForCharacter">
          {simpsons.map((item) => (
            <div className="characterCard">
              <div>
                <button
                  className="deleteButton"
                  onClick={() => this.onDelete(item.quote)}
                >
                  <i className="fa-solid fa-user-xmark"></i>
                </button>
              </div>
              <div className="character">
                <p>{item.character}</p>
              </div>
              <LikesImage
                characterDirection={item.characterDirection}
                image={item.image}
                character={item.character}
              />
              <div className="quote">
                <p>{item.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default CharacterCards;
