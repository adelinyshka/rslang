import React from 'react';
import { useSelector } from 'react-redux';
import Game from './Game';
import StartScreen from './StartScreen';

import { statusGameSelector } from '../redux/selectors';

function SpeakIt() {
  const statusGame = useSelector(statusGameSelector);

  return (
    statusGame ? <Game /> : <StartScreen />
  );
}

export default SpeakIt;
