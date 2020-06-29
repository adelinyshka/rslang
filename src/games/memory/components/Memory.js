import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import Game from './Game';
import StartPage from './StartPage';

function Memory() {
  const [isGame, setIsGame] = useState(false);
  const startGame = () => setIsGame(true);

  return (
    isGame ? <Game /> : <StartPage onStart={startGame} />
  );
}

export default Memory;
