import { createContext, useContext, useState } from "react";

const NUM_HOLES = 9;

const GameContext = createContext();

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [moleIndex, setMoleIndex] = useState(0);

  function startGame() {
    setScore(0);
    setMoleIndex(Math.floor(Math.random() * NUM_HOLES));
    setIsPlaying(true);
  }

  function restartGame() {
    setIsPlaying(false);
  }

  function whackMole() {
    setScore((currentScore) => currentScore + 1);
    setMoleIndex(Math.floor(Math.random() * NUM_HOLES));
  }

  const value = {
    isPlaying,
    score,
    moleIndex,
    numHoles: NUM_HOLES,
    startGame,
    restartGame,
    whackMole,
  };

  return (
    <GameContext.Provider value={value}>{children}</GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}