import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Player from "./components/Player";

function App() {
  const [activePLayer, setActivePlayer] = useState("X");

  const handleSelectSquare = () => {
    setActivePlayer((curActive)=>curActive === 'X' ? 'O' : 'X' )
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePLayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePLayer === "O"}
          />
        </ol>
        <Gameboard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePLayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
