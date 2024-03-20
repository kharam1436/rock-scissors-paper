import "./App.css";
import { Box } from "./components/Box";
import { useState } from "react";
import scissorImg from "./images/scissors-hand.png";
import paperImg from "./images/paper-hand.png";
import rockImg from "./images/rock-hand.png";

const choice = {
  scissors: { name: "scissors", img: scissorImg },
  rock: { name: "rock", img: rockImg },
  paper: { name: "paper", img: paperImg },
};

function App() {
  const [userSelect, setUserSelect] = useState(choice["paper"]);
  const [computerChoice, setComputerChoice] = useState(choice["paper"]);
  const [result, setResult] = useState({});

  const judgement = (user, computer) => {
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
  };

  const randomChoice = () => {
    const select = Object.keys(choice);
    const random = Math.floor(Math.random() * select.length);
    return choice[select[random]];
  };

  const play = (userChoice) => {
    const user = choice[userChoice];
    const computer = randomChoice();
    setUserSelect(user);
    setComputerChoice(computer);
    setResult(judgement(user.name, computer.name));
  };

  return (
    <>
      <div className="main">
        <Box title="You" item={userSelect} result={result.user} />
        <Box title="Computer" item={computerChoice} result={result.computer} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}

export default App;
