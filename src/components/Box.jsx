import React, { Component } from "react";

export class Box extends Component {
  render() {
    const { title, item, result } = this.props;
    return (
      <div className={`box ${result}`}>
        <h1>{title}</h1>
        <img src={item.img} alt={item.name} className="item-img" />
        <h2>{result}</h2>
      </div>
    );
  }
}
