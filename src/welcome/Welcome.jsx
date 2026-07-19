import { useGame } from "../game/GameContext";

export default function Welcome() {
  const { startGame } = useGame();

  return (
    <div className="welcome">
      <h1>Whack-a-Mole</h1>
      <p>
        Click the mole whenever it pops up! Each click earns you a point,
        and the mole will jump to a new hole.
      </p>
      <button onClick={startGame}>Play</button>
    </div>
  );
}