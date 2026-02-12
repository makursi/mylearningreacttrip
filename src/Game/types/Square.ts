export type SquareValue = "X" | "O" | null;
export type Squares = SquareValue[];

/**
 * Properties for the App component
 */
export interface appProps {
  isNext: boolean;
  squares: Squares;
  onPlay: (nextSquares: Squares) => void;
}
