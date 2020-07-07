import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import StyleStartScreen from './style.StartScreen';

import {
  setStatusGame,
} from '../redux';

const StartScreen = () => {
  const dispatch = useDispatch();

  const onStartGame = useCallback(() => {
    dispatch(setStatusGame('no-speach'));
  }, [dispatch]);

  return (
    <StyleStartScreen>
      <h1>
        speakit
      </h1>
      <p>
        Click on the words to hear them sound.
        <br />
        Click on the button and speak the words into the microphone.
      </p>
      <button
        type="button"
        className="btn"
        onClick={onStartGame}
      >
          Start
      </button>
    </StyleStartScreen>
  );
};

export default StartScreen;
