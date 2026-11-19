import React, { useState } from "react";

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(squares) {
  for (const line of WINNING_LINES) {
    const [first, second, third] = line;
    if (squares[first] && squares[first] === squares[second] && squares[first] === squares[third]) {
      return { player: squares[first], line };
    }
  }
  return null;
}

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = getWinner(squares);
  const isDraw = !winner && squares.every(Boolean);
  const winningSquares = winner?.line ?? [];

  function playSquare(index) {
    if (squares[index] || winner) return;

    const nextSquares = [...squares];
    nextSquares[index] = isXNext ? "X" : "O";
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  let status = (
    <>
      Turn: <span className={isXNext ? "status-x" : "status-o"}>{isXNext ? "X" : "O"}</span>
    </>
  );
  if (winner) {
    status = (
      <>
        <span className={winner.player === "X" ? "status-x" : "status-o"}>{winner.player}</span> wins!
      </>
    );
  } else if (isDraw) {
    status = "It's a draw!";
  }

  return (
    <main className="page">
      <div className="game-card">
        <header className="game-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            A CLASSIC FOR TWO
          </div>
          <h1>Tic-Tac-Toe<span>.</span></h1>
          <p>A quick game. Who will get three in a row?</p>
        </header>

        <section className="game" aria-label="Tic-Tac-Toe game">
          <div className="game-topline">
            <div className="players" aria-label="Players">
              <div className={`player player-x ${isXNext && !winner && !isDraw ? "player-active" : ""}`}>
                <span className="player-mark">×</span>
                <span>Player 1</span>
              </div>
              <span className="versus">VS</span>
              <div className={`player player-o ${!isXNext && !winner && !isDraw ? "player-active" : ""}`}>
                <span className="player-mark">○</span>
                <span>Player 2</span>
              </div>
            </div>
            <div className={`status ${winner ? "status-won" : ""}`} aria-live="polite">
              {status}
            </div>
          </div>

          <div className="board" role="group" aria-label="Game board">
            {squares.map((square, index) => {
              const isWinningSquare = winningSquares.includes(index);
              return (
                <button
                  className={`square ${square ? `square-${square.toLowerCase()}` : ""} ${isWinningSquare ? "square-winning" : ""}`}
                  type="button"
                  key={index}
                  onClick={() => playSquare(index)}
                  disabled={Boolean(square) || Boolean(winner) || isDraw}
                  aria-label={`Square ${index + 1}${square ? `, ${square}` : ", empty"}`}
                >
                  {square && <span aria-hidden="true">{square === "X" ? "×" : "○"}</span>}
                </button>
              );
            })}
          </div>

          <button className="reset-button" type="button" onClick={resetGame}>
            <span aria-hidden="true">↻</span>
            {winner || isDraw ? "Play again" : "New game"}
          </button>
        </section>

        <footer className="game-footer">
          <div className="footer-message">
            <span className="footer-line" />
            <p>Three in a row wins.</p>
            <span className="footer-line" />
          </div>
          <a
            className="creator-link"
            href="https://github.com/cesarchamal"
            target="_blank"
            rel="noreferrer"
          >
            Made by cesarchamal
          </a>
        </footer>
      </div>
    </main>
  );
}
