const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

import React from "react";

const GameBoard = () => {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;