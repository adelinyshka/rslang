import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  StyleSwitcherLevel,
  StyleP,
  StyleUl,
  StyleSwitcher,
  StyleSwitcherActive,
} from './style.SwitcherLevel.js';

import {
  setWords,
  setLevel,
  setImage,
  setTranslateActiveWord,
} from '../redux';
import { getWords } from '../utils';

import {
  levelSelector,
} from '../redux/selectors';

const countLevel = 6;
const levels = new Array(countLevel);

const SwitcherLevel = () => {
  const dispatch = useDispatch();
  const activeLevel = useSelector(levelSelector);

  const changeActiveLevel = useCallback((level) => {
    if (activeLevel !== level) {
      getWords(level).then((words) => {
        if (words.length > 1) {
          console.log(words);
          dispatch(setWords(words));
          dispatch(setLevel(level));
          dispatch(setImage(' '));
          dispatch(setTranslateActiveWord(' '));
        }
      });
    }
  }, [activeLevel, dispatch]);

  return (
    <StyleSwitcherLevel>
      <StyleP>Уровень</StyleP>
      <StyleUl>
        {
          levels
            .fill(' ')
            .map((el, index) => index + 1)
            .map((level, index) => (
              <StyleSwitcher
                key={level}
                onClick={() => changeActiveLevel(index)}
                activeLevel={activeLevel === index}
              >
                {level}
              </StyleSwitcher>
            ))
        }
      </StyleUl>
    </StyleSwitcherLevel>
  );
};

export default SwitcherLevel;
