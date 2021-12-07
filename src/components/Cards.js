import React, { Component } from "react";
import data from "../data/data";
import Card from "./Card";

export default class Cards extends Component {
  constructor() {
    super();

    this.state = {
      items: data,
    };
  }
  render() {
    const { items } = this.state;
    console.log(items);
    return (
      <div className="container">
        {items.map((item) => (
          <Card />
        ))}
      </div>
    );
  }
}
