import React from 'react';
import { useSelector } from 'react-redux';
import Game from './Game';
import StartScreen from './StartScreen';

function SpeakIt() {
  const statusGame = useSelector((state) => state.speakit.stateGame);

  return (
    statusGame ? <Game /> : <StartScreen />
  );
}

export default SpeakIt;
