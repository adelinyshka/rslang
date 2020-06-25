import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setWords,
  startGame,
} from '../redux';

import getWords from '../utils';

const StartScreen = () => {
  const dispatch = useDispatch();
  const level = useSelector((state) => state.speakit.level);

  const onStartGame = useCallback(() => {
    getWords(level).then((words) => {
      dispatch(setWords(words));
      dispatch(startGame());
    });
  }, [dispatch, level]);

  return (
    <div>
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
    </div>
  );
};

export default StartScreen;
