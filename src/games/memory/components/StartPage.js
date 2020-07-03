import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Game from './Game';
// import Button from './Button';
import style from './StartPage.module.css';

import {
  setStatusGame,
} from '../redux';

import {
  levelSelector,
} from '../redux/selectors';

const StartPage = () => {
  const dispatch = useDispatch();

  const onStart = useCallback(() => {
    dispatch(setStatusGame('play'));
  }, [dispatch]);

  return (
    <div className={style.Wrapper}>
      <h1>
          Мемори
      </h1>
      <p>Соберите все пары слов, за отведенное время.</p>
      <p>Игра помогает улучшить запоминание слов.</p>
      <button
        type="button"
        onClick={onStart}
        className={style.Button}
      >
          Start
      </button>
    </div>
  );
};
export default StartPage;
