import { useGame } from "./GameContext";
import Hole from "./Hole";

export default function GameBoard() {
  const { score, numHoles, restartGame } = useGame();

  return (
    <div className="game-board">
      <div className="game-header">
        <p>Score: {score}</p>
        <button onClick={restartGame}>Restart</button>
      </div>
      <div className="holes">
        {Array.from({ length: numHoles }).map((_, index) => (
          <Hole key={index} index={index} />
        ))}
      </div>
    </div>
  );
}