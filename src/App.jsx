import React, { Component } from "react";
import scissorImg from "./images/scissors-hand.png";
import paperImg from "./images/paper-hand.png";
import rockImg from "./images/rock-hand.png";

import "./App.css";
import { Box } from "./components/Box";

const choice = {
  scissors: { name: "scissors", img: scissorImg },
  rock: { name: "rock", img: rockImg },
  paper: { name: "paper", img: paperImg },
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: choice["paper"],
      computerChoice: choice["paper"],
      result: {},
    };
  }

  judgement(user, computer) {
    console.log(user, computer);
    if (user === computer) return { user: "tie", computer: "tie" };
    if (
      (user === "scissors" && computer === "paper") ||
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock")
    ) {
      return { user: "win", computer: "lose" };
    } else {
      return { user: "lose", computer: "win" };
    }
  }

  randomChoice() {
    const select = Object.keys(choice);
    const random = Math.floor(Math.random() * select.length);
    return choice[select[random]];
  }

  play(userChoice) {
    const user = choice[userChoice];
    const computer = this.randomChoice();

    this.setState({
      userSelect: user,
      computerChoice: computer,
      result: this.judgement(user.name, computer.name),
    });
  }

  render() {
    return (
      <div>
        <div className="main">
          <Box
            title="You"
            item={this.state.userSelect}
            result={this.state.result.user}
          />
          <Box
            title="Computer"
            item={this.state.computerChoice}
            result={this.state.result.computer}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    );
  }
}
