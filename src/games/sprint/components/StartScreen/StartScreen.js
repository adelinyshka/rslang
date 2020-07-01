import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
// import useAPI from '../../../../common/utils/index';
import StyleStartScreen from './style.StartScreen';

import SwitcherLevel from '../../../../common/components/LevelSwitcher';

import Timer from '../Timer/Timer';

import Sample from '../../Sample';

import {
  levelSelector,
} from '../../redux/selectors';

import {
  initGame,
  setWords,
  startGame,
  setLevel,
} from '../../redux/index';

const StartScreen = () => {
  const dispatch = useDispatch();
  const activeLevel = useSelector(levelSelector);

  // const action = useCallback(
  //   (data) => dispatch(setWords(data)), [dispatch],
  // );
  // const userWordsURL = useMemo(
  //   () => `words?page=1&group=${activeLevel}`, [activeLevel],
  // );

  // const fetchOptions = {
  //   method: 'GET',
  // };
  // useAPI(userWordsURL, fetchOptions, action);

  // const level = useSelector((state) => state.sprint.level);

  const onInitGame = () => {
    dispatch(setWords(Sample));
    dispatch(initGame());
    console.log(activeLevel);
  };

  const changeActiveLevel = (activeLevelProps, levelProps) => {
    if (activeLevelProps !== levelProps) {
      dispatch(setLevel(levelProps));
    }
  };

  return (
    <StyleStartScreen>
      <Timer setTimer={3} timerHandler={() => console.log('конец')} />
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
        changeActiveLevel={changeActiveLevel}
      />
      <button
        type="button"
        onClick={onInitGame}
      >
          Start
      </button>
    </StyleStartScreen>
  );
};

StartScreen.propTypes = {
  changeActiveLevel: PropTypes.func,
};

export default StartScreen;
