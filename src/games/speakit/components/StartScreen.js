import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
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
      <Link to="/games">
        <img
          className="cross"
          src="./../assets/images/speakit/cross.svg"
          alt="close"
        />
      </Link>
      <div className="center_alignment">
        <h1>
        SpeakIt
        </h1>
        <p>
        Click on the words to hear them sound.
          <br />
        Click on the button and speak the words into the microphone.
        </p>
        <Form>
          <Button
            type="button"
            className="start_btn"
            onClick={onStartGame}
          >
          Start
          </Button>
        </Form>
      </div>
      <img
        className="decoration"
        src="./../assets/images/speakit/start-screen-pic.svg"
        alt="beauty flower"
      />
    </StyleStartScreen>
  );
};

export default StartScreen;
