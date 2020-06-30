import React from 'react';
import style from './Lives.module.css';

function Lives({ livesCount }) {
  const lives = new Array(livesCount);

  return (
    <div className={style.Lives}>
      {
        lives.fill(<img
          src="../assets/images/memory/heart.svg"
          alt="lives"
        />)
      }
    </div>
  );
}

export default Lives;
