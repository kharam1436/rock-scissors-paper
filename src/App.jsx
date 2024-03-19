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

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };

  return (
    <>
      <div className='main'>
        <Box title='You' userSelect={userSelect} />
        <Box title='Computer' userSelect={userSelect} />
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}

export default App;
