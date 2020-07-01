import React, { useState, useEffect } from 'react';
import GameOver from './GameOver';
import style from './Timer.module.css';

function Timer() {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const timerID = setTimeout(() => setTimer(timer - 1), 1000);
    if (timer <= 0) {
      setTimeout(() => { clearInterval(timerID); }, 0);
    }
    return function cleanup() {
      clearTimeout(timerID);
    };
  }, [timer]);

  return (
    <div className={style.Timer}>
      <h1>
        Осталось:
        {
          timer
        }
      </h1>
      {timer === 0 ? <GameOver /> : ''}
    </div>
  );
}

export default Timer;
