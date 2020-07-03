import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import useAPI from '../../../../common/utils/index';
import StyleStartScreen from './style.StartScreen';

import SwitcherLevel from '../../../../common/components/LevelSwitcher';

import {
  levelSelector,
} from '../../redux/selectors';

import {
  initGame,
  setWords,
  setLevel,
} from '../../redux/index';

const fetchOptions = {
  method: 'GET',
};

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const StartScreen = () => {
  const dispatch = useDispatch();
  const activeLevel = useSelector(levelSelector);

  const changeActiveLevel = useCallback((levelProps) => {
    if (activeLevel !== levelProps) {
      dispatch(setLevel(levelProps));
    }
  }, [dispatch]);

  const action = useCallback(
    (data) => {
      data.forEach((el) => {
        el.falsyTranslate = el.wordTranslate;
      });
      data.forEach((el) => {
        el.falsyTranslate = getRandomInt(2)
          ? data[getRandomInt(data.length - 1)].falsyTranslate
          : el.falsyTranslate;
        el.correctFlag = (el.falsyTranslate === el.wordTranslate);
      });
      (dispatch(setWords(data)));
    }, [dispatch],
  );

  const userWordsURL = useMemo(
    () => `words?page=0&group=${activeLevel}
    &wordsPerExampleSentenceLTE=1000&wordsPerPage=300`, [activeLevel],
  );

  useAPI(userWordsURL, fetchOptions, action);

  const onInitGame = () => dispatch(initGame());

  return (
    <StyleStartScreen>
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
