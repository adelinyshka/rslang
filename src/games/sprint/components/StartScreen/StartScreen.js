import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
// import useAPI from '../../../../common/utils/index';
import StyleStartScreen from './style.StartScreen';

import SwitcherLevel from '../LvlSwitcher/LvlSwitcher';

import Timer from '../Timer/Timer';

import {
  levelSelector,
} from '../../redux/selectors';

import {
  setWords,
  startGame,
  setLevel,
} from '../../redux/index';

import Sample from '../../Sample';

const StartScreen = () => {
  const activeLevel = useSelector(levelSelector);
  const dispatch = useDispatch();
  // const level = useSelector((state) => state.sprint.level);

  const onStartGame = () => {
    dispatch(setWords(Sample));
    dispatch(startGame());
  };

  const changeActiveLevel = (activeLevelProps, levelProps) => {
    if (activeLevelProps !== levelProps) {
      dispatch(setLevel(levelProps));
    }
  };

  return (
    <StyleStartScreen>
      <Timer setTimer={3} timerHandler={() => console.log('конечек')} />
      <h1>
        Спринт
      </h1>
      <p>
      Учит быстро переводить с английского на ваш родной язык.
        <br />
      Для этой тренировки используются слова из вашего словаря или
        <br />
      вы можете выбрать уровень сложности случайных слов.
      </p>
      <SwitcherLevel
        handlerOnClick={changeActiveLevel}
        activeLevel={activeLevel}
      />
      <button
        type="button"
        onClick={onStartGame}
      >
          Start
      </button>
    </StyleStartScreen>
  );
};

StartScreen.propTypes = {
  activeLevel: PropTypes.number,
  handlerOnClick: PropTypes.func,
};

export default StartScreen;
