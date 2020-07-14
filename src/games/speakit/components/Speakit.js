import React from 'react';
import { useSelector } from 'react-redux';

import StyleSpeakIt from './style.Speakit';

import Game from './Game';
import StartScreen from './StartScreen';

import { statusGameSelector } from '../redux/selectors';

function SpeakIt() {
  const statusGame = useSelector(statusGameSelector);

  return (
    <StyleSpeakIt>
      {statusGame ? (<Game />) : (<StartScreen />)}
    </StyleSpeakIt>
  );
}

export default SpeakIt;
