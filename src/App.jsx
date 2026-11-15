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
      Turno de <span className={isXNext ? "status-x" : "status-o"}>{isXNext ? "X" : "O"}</span>
    </>
  );
  if (winner) {
    status = (
      <>
        ¡Gana <span className={winner.player === "X" ? "status-x" : "status-o"}>{winner.player}</span>!
      </>
    );
  } else if (isDraw) {
    status = "¡Empate!";
  }

  return (
    <main className="page">
      <div className="game-card">
        <header className="game-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            UN CLÁSICO PARA DOS
          </div>
          <h1>Tres en raya<span>.</span></h1>
          <p>Una partida rápida. ¿Quién pondrá tres en línea?</p>
        </header>

        <section className="game" aria-label="Partida de tres en raya">
          <div className="game-topline">
            <div className="players" aria-label="Jugadores">
              <div className={`player player-x ${isXNext && !winner && !isDraw ? "player-active" : ""}`}>
                <span className="player-mark">×</span>
                <span>Jugador 1</span>
              </div>
              <span className="versus">VS</span>
              <div className={`player player-o ${!isXNext && !winner && !isDraw ? "player-active" : ""}`}>
                <span className="player-mark">○</span>
                <span>Jugador 2</span>
              </div>
            </div>
            <div className={`status ${winner ? "status-won" : ""}`} aria-live="polite">
              {status}
            </div>
          </div>

          <div className="board" role="group" aria-label="Tablero">
            {squares.map((square, index) => {
              const isWinningSquare = winningSquares.includes(index);
              return (
                <button
                  className={`square ${square ? `square-${square.toLowerCase()}` : ""} ${isWinningSquare ? "square-winning" : ""}`}
                  type="button"
                  key={index}
                  onClick={() => playSquare(index)}
                  disabled={Boolean(square) || Boolean(winner) || isDraw}
                  aria-label={`Casilla ${index + 1}${square ? `, ${square}` : ", vacía"}`}
                >
                  {square && <span aria-hidden="true">{square === "X" ? "×" : "○"}</span>}
                </button>
              );
            })}
          </div>

          <button className="reset-button" type="button" onClick={resetGame}>
            <span aria-hidden="true">↻</span>
            {winner || isDraw ? "Jugar de nuevo" : "Reiniciar partida"}
          </button>
        </section>

        <footer className="game-footer">
          <div className="footer-message">
            <span className="footer-line" />
            <p>¿Hasta qué nivel puedes llegar?</p>
            <span className="footer-line" />
          </div>
          <a
            className="creator-link"
            href="https://github.com/Cesarkubanski"
            target="_blank"
            rel="noreferrer"
          >
            Hecho por Cesarkubanski
          </a>
        </footer>
      </div>
    </main>
  );
}
