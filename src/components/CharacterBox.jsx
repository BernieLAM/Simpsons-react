import React, { Component } from "react";
import LikesImage from "./LikesImage";

class CharacterBox extends Component {
  render() {
    const { filtered } = this.props;
    const { simpsons } = this.props;

    return (
      <>
        {filtered.map((item) => (
          <div className="characterCard">
            <div>
              <button
                className="deleteButton"
                onClick={() => this.props.onDelete(item.quote)}
              >
                <i className="fa-solid fa-user-xmark"></i>
              </button>
            </div>

            <div className="character">
              <p>{item.character}</p>
            </div>

            <LikesImage
              simpsons={simpsons}
              quote={item.quote}
              characterDirection={item.characterDirection}
              image={item.image}
              character={item.character}
              onLike={this.props.onLike}
              onCount={this.props.onCount}
            />

            <div className="quote">
              <p>{item.quote}</p>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default CharacterBox;
