import React, { Component } from "react";
import LikesImage from "./LikesImage";

class EachCharacter extends Component {
  onDelete = () => {};

  render() {
    const { character, quote, characterDirection, image } = this.props.item;
    return (
      <div className="characterCard">
        <div>
          <button>
            <i class="fa-solid fa-user-xmark"></i>
          </button>
        </div>
        <div className="character">
          <p>{character}</p>
        </div>
        <LikesImage
          characterDirection={characterDirection}
          image={image}
          character={character}
        />
        <div className="quote">
          <p>{quote}</p>
        </div>
      </div>
    );
  }
}

export default EachCharacter;

//----- note !
//----- img src don't need the whole link coz index.image already include the link
//----- img alt should not be "{this.props.item.character}", the double quote will make it as a string
