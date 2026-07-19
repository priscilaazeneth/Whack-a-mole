import { useGame } from "./GameContext";

export default function Mole() {
  const { whackMole } = useGame();

  return <div className="mole" onClick={whackMole}></div>;
}