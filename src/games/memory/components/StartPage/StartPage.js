import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import StartPageWrapper from './StartPageWrapper';

import {
  setStatusGame,
} from '../../redux/index';

const StartPage = () => {
  const dispatch = useDispatch();

  const onStart = useCallback(() => {
    dispatch(setStatusGame('play'));
  }, [dispatch]);

  return (
    <StartPageWrapper>
      <Link to="../games">

        <img
          className="cross"
          src="/assets/images/memory/cross.svg"
          alt="cross"
        />
      </Link>
      <div className="center_alignment">
        <h2 className="title_h2">Мемори</h2>
        <div className="game_description">
          Соберите все пары слов, за отведенное время.
          Игра помогает улучшить запоминание слов.
        </div>
        <Form>
          <Button
            className="start_btn"
            onClick={onStart}
          >
            Start
          </Button>

        </Form>
      </div>
    </StartPageWrapper>
  );
};
export default StartPage;
