import React, { Component } from "react";
import axios from "axios";
// import AllCharacter from "./components/AllCharacter";
import LikesImage from "./LikesImage";

class CharacterCards extends Component {
  state = { simpsons: [] };

  onDelete = (quote) => {
    const index = this.state.simpsons.findIndex(
      (simpsons) => simpsons.quote === quote
    ); //----- delete function must exist where the state is, because the delete function changes the state
    //----- use something unique to findIndex to tell computer which one you delete

    const simpsonsCopy = [...this.state.simpsons];
    simpsonsCopy.splice(index, 1);
    this.setState({ simpsons: simpsonsCopy });
  }; //----- always use copy to manipulate things, won't mess up the orginal one,
  //----- here using copy one to splice one out and send back to state
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
