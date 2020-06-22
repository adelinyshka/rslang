import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import action from '../../redux/actionsSpeakit';
import getWords from '../get-words';

const StartScreen = () => {
  const level = useSelector((state) => state.speakit.level);
  const dispatch = useDispatch();
  const startGame = async () => {
    const words = await getWords(level);
    dispatch(action.setWords(words));
    dispatch(action.startGame());
  };

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
      <button type="button" className="btn" onClick={startGame}>Start</button>
    </div>
  );
};

export default StartScreen;
