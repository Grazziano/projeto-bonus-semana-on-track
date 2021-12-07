import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { image, name } = this.props;
    return (
      <div className="card">
        <img src={require(`../assets/images/${image}`)} alt={name} />
      </div>
    );
  }
}
