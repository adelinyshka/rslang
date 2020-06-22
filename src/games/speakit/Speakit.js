import React, { useState } from 'react';
import { useDespatch, useSelector } from 'react-redux';
import Game from './components/game/Game';
import StartScreen from './components/start-screen/Start-screen';

function SpeakIt() {
  const statusGame = useSelector((state) => state.speakit.stateGame);

  return (
    statusGame ? <Game /> : <StartScreen />
  );
}

export default SpeakIt;
