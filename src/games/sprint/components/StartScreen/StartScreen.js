import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import StyleStartScreen from './style.StartScreen';

import SwitcherLevel from '../../../../common/components/LevelSwitcher';

import {
  levelSelector,
} from '../../redux/selectors';

import {
  initGame,
  setLevel,
} from '../../redux/index';

const StartScreen = () => {
  const dispatch = useDispatch();
  const activeLevel = useSelector(levelSelector);

  const changeActiveLevel = useCallback((levelProps) => {
    if (activeLevel !== levelProps) {
      dispatch(setLevel(levelProps));
    }
  }, [dispatch, activeLevel]);

  const onInitGame = useCallback(() => dispatch(initGame()), [dispatch]);

  return (
    <StyleStartScreen>
      <Link to="../games">
        <img
          className="cross"
          src="/assets/images/sprint/cross.svg"
          alt="close"
        />
        <div className="wrapper-switcher" />
        <SwitcherLevel
          changeActiveLevel={changeActiveLevel}
        />
      </Link>
      <div className="center_alignment">
        <h1 className="title_h2">
        Спринт
        </h1>

        <div className="game_description">
      Учит быстро переводить с английского на русский.
      Для этой тренировки используются слова из вашего словаря и
       случайные слова.
        </div>
        <Form>
          <Button
            className="start_btn"
            onClick={onInitGame}
          >
          Start
          </Button>
        </Form>
      </div>
      <img
        className="decoration"
        src="/assets/images/sprint/sprint_startscreen.svg"
        alt="running man"
      />
    </StyleStartScreen>
  );
};

StartScreen.propTypes = {
  changeActiveLevel: PropTypes.func,
};

export default StartScreen;
