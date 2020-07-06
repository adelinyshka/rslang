import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, Navbar, Form, Nav,
} from 'react-bootstrap';

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
  }, [dispatch]);

  const onInitGame = () => dispatch(initGame());

  return (
    <StyleStartScreen>
      <div>
        <h1 className="gameName">
        Спринт
        </h1>
      </div>
      <div className="text">
        <p>
      Учит быстро переводить с английского на ваш родной язык.
          <br />
      Для этой тренировки используются слова из вашего словаря и
          <br />
       случайные слова.
        </p>
      </div>
      <SwitcherLevel
        changeActiveLevel={changeActiveLevel}
      />
      <Button
        className="start_btn"
        variant="outline-success"
        onClick={onInitGame}
      >
        Start
      </Button>
      <div className="imgCantainer">
        <img src="/assets/images/sprint/sprint_startscreen.svg" />
        <div />
      </div>
    </StyleStartScreen>
  );
};

StartScreen.propTypes = {
  changeActiveLevel: PropTypes.func,
};

export default StartScreen;
