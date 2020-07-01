import React from 'react';
import style from './GameOver.module.css';

function GameOver({ RightAnswer }) {
  return (
    <div className={style.BlackScreen}>
      <div className={style.GameOver}>
        <div className={style.Top}>
          Количество верных ответов:
          {RightAnswer}
        </div>
        <div className={style.Bottom}>Попробуйте еще :) </div>
      </div>
    </div>
  );
}

export default GameOver;
