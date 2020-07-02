import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StartScreen from './components/StartScreen/StartScreen';
import Game from './components/Game/Game';
import Timer from './components/Timer/Timer';

import { initGameSelector, startGameSelector } from './redux/selectors';

import {
  startGame,
} from './redux/index';

function Sprint() {
  const dispatch = useDispatch();
  const GameWasinit = useSelector(initGameSelector);
  const GameWasstart = useSelector(startGameSelector);

  const onStartGame = () => {
    dispatch(startGame());
  };

  if (GameWasinit) {
    if (GameWasstart) {
      return (<Game />);
    }
    return (<Timer initialTime={5} timeOutHandler={onStartGame} />);
  }

  return <StartScreen />;
}

export default Sprint;
