import React, { Component } from "react";

class DeleteButton extends Component {
  onDelete = (index) => {
    const simpsons = [...this.state.simpsons];
    simpsons.splice(index, 1);

    this.setState({ simpsons });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.onDelete(index)}>
          <i className="fa-solid fa-user-xmark"></i>
        </button>
      </div>
    );
  }
}

export default DeleteButton;
