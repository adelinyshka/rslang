import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import useAPI from '../../../../common/utils/index';
import StyleStartScreen from './style.StartScreen';

import SwitcherLevel from '../../../../common/components/LevelSwitcher';

import Timer from '../Timer/Timer';

import {
  wordsSelector,
  levelSelector,
} from '../../redux/selectors';

import {
  initGame,
  setWords,
  startGame,
  setLevel,
} from '../../redux/index';

const fetchOptions = {
  method: 'GET',
};

const StartScreen = () => {
  const dispatch = useDispatch();
  const activeLevel = useSelector(levelSelector);

  const changeActiveLevel = (levelProps) => {
    dispatch(setLevel(levelProps));
    console.log('вызов');
  };

  const action = useCallback(
    (data) => dispatch(setWords(data)), [dispatch],
  );

  const userWordsURL = useMemo(
    () => `words?page=1&group=${activeLevel}`, [activeLevel],
  );

  useAPI(userWordsURL, fetchOptions, action);

  const onInitGame = () => {
    dispatch(initGame());
  };

  return (
    <StyleStartScreen>
      {/* <Timer initialTime={3} timeOutHandler={() => console.log('конец')} /> */}
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
