/* 

2026-02-12 17:46:08

This is a tic-tac-toe game example from the official React Chinese website.

Learn and understand: 1. How to use the useState hook 
                      2. Communication between components


*/
import { useState } from "react";
import Board from "../components/board";
function Game() {
  const [isNext, setIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  //currentHistory是一个数组, 存取的是当前历史的数组
  const currentHistory = history[history.length - 1];
  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsNext(!isNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let text;

    if (move > 0) {
      text = "Go to move #" + move;
    } else {
      text = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{text}</button>
      </li>
    );
  });
  return (
    <>
      <div>
        <Board isNext={isNext} squares={currentHistory} onPlay={handlePlay} />
      </div>

      <div>
        <ol>{moves}</ol>
      </div>
    </>
  );
}

export default Game;
