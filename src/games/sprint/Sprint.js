import React from 'react';
import { useSelector } from 'react-redux';
import StartScreen from './components/StartScreen/StartScreen';
import Game from './components/Game/Game';

import { statusGameSelector } from './redux/selectors';

function Sprint() {
  const statusGame = useSelector(statusGameSelector);
  return (
    statusGame ? <Game /> : <StartScreen />
  );
}

export default Sprint;
