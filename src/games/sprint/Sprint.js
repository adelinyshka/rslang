import React from 'react';
import { useSelector } from 'react-redux';
import StartScreen from './components/StartScreen/StartScreen';
import Game from './components/Game/Game';

// const audioPath = 'https://raw.githubusercontent.com'
//   + '/irinainina/rslang-data/master/';

function Sprint() {
  const statusGame = useSelector((state) => state.sprint.stateGame);

  return (
    statusGame ? <Game /> : <StartScreen />
  );
}

export default Sprint;
