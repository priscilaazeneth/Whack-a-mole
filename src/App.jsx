import { GameProvider, useGame } from "./game/GameContext";
import Welcome from "./welcome/Welcome";
import GameBoard from "./game/GameBoard";

function AppContent() {
  const { isPlaying } = useGame();
  return isPlaying ? <GameBoard /> : <Welcome />;
}

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}