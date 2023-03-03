import React, { Component } from "react";
import LikesImage from "./LikesImage";

class AllCharacter extends Component {
  onDelete = (index) => {
    const simpsonsCopy = [...this.props.simpsons];
    simpsonsCopy.splice(index, 1);

    this.setState({ simpsons: simpsonsCopy });
    console.log(simpsonsCopy);
  };

  render() {
    return (
      <div className="gridForCharacter">
        {this.props.simpsons.map((item, index) => (
          <>
            <div className="characterCard">
              <div>
                <button onClick={() => this.onDelete(index)}>
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
          </>
        ))}
      </div>
    );
  }
}

export default AllCharacter;

//----- note !
//----- img src don't need the whole link coz index.image already include the link
//----- img alt should not be "{this.props.item.character}", the double quote will make it as a string
//----- <button onClick={() => this.onDelete(quote)}>, using quote is because it's unique, won't delete the wrong one
//----- <button onClick={() => this.onDelete(index)}> wrap it as function to make it only work when we need it
