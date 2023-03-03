import React, { Component } from "react";

class LikesImage extends Component {
  state = { like: 0 };
  render() {
    const onLike = () => {
      this.setState({ like: this.state.like + 1 });
    };

    return (
      <>
        <div className="likes">
          <p>Likes: {this.state.like}</p>
        </div>
        <div className={this.props.characterDirection}>
          <button className="imageButton">
            <img
              src={this.props.image}
              alt={this.props.character}
              onClick={onLike}
            ></img>
          </button>
        </div>
      </>
    );
  }
}

export default LikesImage;
