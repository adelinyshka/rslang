import React from 'react';
// import { useSelector } from 'react-redux';
// import Game from './Game';
import StartPage from './StartPage';

function Memory() {
  // const statusGame = useSelector((state) => state.memory.stateGame);

  return (
    // statusGame ? <Game /> : <startPage />
    <StartPage />
  );
}

export default Memory;
