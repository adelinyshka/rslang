import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import StartScreen from './components/StartScreen/StartScreen';
import Game from './components/Game/Game';
import Timer from './components/Timer/Timer';
import Statistics from './components/Statistics/Statistics';

import {
  initGameSelector,
  startGameSelector,
  overGameSelector,
} from './redux/selectors';

import {
  startGame,
} from './redux/index';

function Sprint() {
  const dispatch = useDispatch();
  const gameInited = useSelector(initGameSelector);
  const gameStarted = useSelector(startGameSelector);
  const gameOver = useSelector(overGameSelector);

  const onStartGame = useCallback(
    () => dispatch(startGame()), [dispatch],
  );
  if (gameOver) {
    return (<Statistics />);
  }
  if (gameInited) {
    if (gameStarted) {
      return (<Game />);
    }
    return (<Timer initialTime={2} timeOutHandler={onStartGame} />);
  }

  return (<StartScreen />);
}

export default Sprint;
