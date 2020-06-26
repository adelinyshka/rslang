import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './StartPage.module.css';

// import {
//   setWords,
//   startGame,
// } from '../redux';

// import {
//   getWords,
// } from '../utils/index';

const StartPage = () =>
// const dispatch = useDispatch();
// const level = useSelector((state) => state.memory.level);

// const onStartGame = useCallback(() => {
//   getWords(level).then((words) => {
//     dispatch(setWords(words));
//     dispatch(startGame());
//   });
// }, [dispatch, level]);

  (
    <div className={style.Wrapper}>
      <h1>
        memory
      </h1>

      <button
        type="button"
        // onClick={onStartGame}
      >
          Start
      </button>
    </div>
  );
export default StartPage;
