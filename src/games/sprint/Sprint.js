import React from 'react';
import { useSelector } from 'react-redux';
import StartScreen from './components/StartScreen/StartScreen';
import Game from './components/Game/Game';
import Timer from './components/Timer/Timer';

import { initGameSelector, startGameSelector } from './redux/selectors';

function Sprint() {
  const initGame = useSelector(initGameSelector);
  const startGame = useSelector(startGameSelector);
  return (
    initGame ? <Game /> : <StartScreen />
  );
}

export default Sprint;
