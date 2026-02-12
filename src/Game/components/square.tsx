interface square {
  value: SquareValue;
  onSquareClick: () => void;
}

import type { SquareValue } from "../types/Square";

function Square({ value, onSquareClick }: square) {
  return (
    <>
      <button onClick={onSquareClick}>{value}</button>
    </>
  );
}

export default Square;
