import { useGame } from "./GameContext";
import Mole from "./Mole";

export default function Hole({ index }) {
  const { moleIndex } = useGame();
  const hasMole = index === moleIndex;

  return <div className="hole">{hasMole && <Mole />}</div>;
}