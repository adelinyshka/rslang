import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../style.module.css';
import {
  setWords,
  setLevel,
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
          dispatch(setWords(words));
          dispatch(setLevel(level));
        }
      });
    }
  }, [activeLevel, dispatch]);

  return (
    <div
      className="switcherLevel"
    >
      <p className="p">Уровень</p>
      <ul className="ul">
        {
          levels
            .fill(' ')
            .map((element, index) => index + 1)
            .map((level) => (
              <li
                className="switcher switcherActive"
                key={level}
                id={level - 1}
                onClick={() => changeActiveLevel(level)}
              >
                {level}
              </li>
            ))
        }
      </ul>
    </div>
  );
};

export default SwitcherLevel;
