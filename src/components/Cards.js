import React, { Component } from "react";
import Card from "./Card";
import Loading from "./Loading";

export default class Cards extends Component {
  constructor() {
    super();

    this.state = {
      items: [
        {
          id: 1,
          name: "Lara Croft",
          img: "lara-croft.png",
          stat: "",
        },
        {
          id: 1,
          name: "Lara Croft",
          img: "lara-croft.png",
          stat: "",
        },
        {
          id: 2,
          name: "Luigi",
          img: "luigi.png",
          stat: "",
        },
        {
          id: 2,
          name: "Luigi",
          img: "luigi.png",
          stat: "",
        },
        {
          id: 3,
          name: "Mario",
          img: "Mario.png",
          stat: "",
        },
        {
          id: 3,
          name: "Mario",
          img: "Mario.png",
          stat: "",
        },
        {
          id: 4,
          name: "Mega Man",
          img: "Mega_Man.png",
          stat: "",
        },
        {
          id: 4,
          name: "Mega Man",
          img: "Mega_Man.png",
          stat: "",
        },
        {
          id: 5,
          name: "Pac Man",
          img: "pac-man.jpg",
          stat: "",
        },
        {
          id: 5,
          name: "Pac Man",
          img: "pac-man.jpg",
          stat: "",
        },
        {
          id: 6,
          name: "Sonic",
          img: "sonic.jpg",
          stat: "",
        },
        {
          id: 6,
          name: "Sonic",
          img: "sonic.jpg",
          stat: "",
        },
        {
          id: 7,
          name: "Ryu",
          img: "ryu.png",
          stat: "",
        },
        {
          id: 7,
          name: "Ryu",
          img: "ryu.png",
          stat: "",
        },
        {
          id: 8,
          name: "Pikachu",
          img: "pikachu.png",
          stat: "",
        },
        {
          id: 8,
          name: "Pikachu",
          img: "pikachu.png",
          stat: "",
        },
      ],
      loading: true,
    };

    this.sortCards = this.sortCards.bind(this);
  }

  componentDidMount() {
    this.sortCards();
  }

  sortCards() {
    const { items } = this.state;
    const newOrder = items.sort(() => Math.random() - 0.5);
    this.setState({
      items: newOrder,
      loading: false,
    });
  }

  render() {
    const { items, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <div className="container">
        {items.map((item, index) => (
          <Card key={index} image={item.img} name={item.name} />
        ))}
      </div>
    );
  }
}
