import { useState } from "react";
import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";

function App() {
  const[activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = () => {
    setActivePlayer((currActive) => currActive === "X" ? "O" : "X")
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player" >
          <Player initialName="Player 1" symbol="X" isActive = {activePlayer === "x"}/>
          <Player initialName="Player 2" symbol="O" isActive = {activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
