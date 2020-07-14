import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StartPageWrapper from './StartPageWrapper';
import {
  setStatusGame,
} from '../redux';

const StartPage = () => {
  const dispatch = useDispatch();

  const onStart = useCallback(() => {
    dispatch(setStatusGame(true));
  }, [dispatch]);

  const onExit = useCallback(() => {
    dispatch(setStatusGame(false));
  }, [dispatch]);

  return (
    <StartPageWrapper>
      <Link to="../games">
        <img
          className="cross"
          src="/assets/images/savannah/x.svg"
          alt="close"
        />
      </Link>
      <div className="center_alignment">
        <h2 className="title_h2">Саванна</h2>
        <div className="game_description">
          Тренировка Саванна развивает словарный запас. Выберите правильный
          перевод слова.
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
      <img
        className="decoration"
        src="/assets/images/savannah/2_trees.svg"
        alt="two trees"
      />
    </StartPageWrapper>
  );
};

export default StartPage;
