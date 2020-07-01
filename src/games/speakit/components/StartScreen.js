import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StyleStartScreen from './style.StartScreen';

import {
  setWords,
  setStatusGame,
} from '../redux';

import {
  levelSelector,
} from '../redux/selectors';

import getWords from '../utils';

const StartScreen = () => {
  const dispatch = useDispatch();
  const level = useSelector(levelSelector);

  const onStartGame = useCallback(() => {
    getWords(level).then((words) => {
      dispatch(setWords(words));
      dispatch(setStatusGame('no-speach'));
    });
  }, [dispatch, level]);

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
