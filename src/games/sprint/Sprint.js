import React from 'react';
import { useSelector } from 'react-redux';

import StartScreen from './components/StartScreen/StartScreen';
import Game from './components/Game/Game';
import Statistics from './components/Statistics/Statistics';

import {
  initGameSelector,
  overGameSelector,
} from './redux/selectors';

function Sprint() {
  const gameInited = useSelector(initGameSelector);
  const gameOver = useSelector(overGameSelector);

  if (gameOver) {
    return (<Statistics />);
  }
  if (gameInited) {
    return (<Game />);
  }

  return (<StartScreen />);
}

export default Sprint;
