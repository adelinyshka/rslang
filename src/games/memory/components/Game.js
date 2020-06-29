import React from 'react';
import style from './Game.module.css';

function Game() {
  const level = 0;

  return (
    <div className={style.GameWrapper}>
      <div className={style.Level}>
        Блок с уровнем
        {level}
      </div>
      <div className={style.Lives}>
        <div>Жизни</div>
        <div>Часы</div>
      </div>
      <div className={style.CardBlock}>Блок с карточками</div>
    </div>
  );
}

export default Game;
