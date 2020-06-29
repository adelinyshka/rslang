import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StyleStartScreen from './style.StartScreen';

import SwitcherLevel from '../LvlSwitcher/LvlSwitcher';

import {
  setWords,
  startGame,
} from '../../redux/index';

import {
  getWords,
} from '../../utils/index';

const StartScreen = () => {
  const dispatch = useDispatch();
  const level = useSelector((state) => state.sprint.level);

  const onStartGame = useCallback(() => {
    getWords(level).then((words) => {
      dispatch(setWords(words));
      dispatch(startGame());
    });
  }, [dispatch, level]);

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
      <SwitcherLevel />
      <button
        type="button"
        onClick={onStartGame}
      >
          Start
      </button>
    </StyleStartScreen>
  );
};
export default StartScreen;
