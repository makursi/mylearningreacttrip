import type { appProps } from "../types/Square";
import Square from "./square";
function Board({ isNext, squares, onPlay }: appProps) {
  const winner: (string | null)[] = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner is :" + winner;
  } else {
    status = "Next player: " + (isNext ? "X" : "O");
  }

  function handleclick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (isNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    onPlay(nextSquares);
  }

  //计算获胜者方法: 填入目标队列值,然后返回符合获胜条件的队列元素,取获胜队列元素中的任意一个值作为获胜者值
  function calculateWinner(squares: Array<string>[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  return (
    <>
      <div>
        <h1>{status}</h1>
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleclick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleclick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleclick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleclick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleclick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleclick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleclick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleclick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleclick(8)} />
      </div>
    </>
  );
}

export default Board;
