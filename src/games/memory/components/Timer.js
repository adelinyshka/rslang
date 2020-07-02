import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './Timer.module.css';

function Timer({ isActive, timeOutHandler, initialTime }) {
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    const timerID = setTimeout(() => {
      if (timer > 0 && isActive) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearTimeout(timerID);
  }, [timer, isActive]);

  useEffect(() => {
    if (timer <= 0) {
      timeOutHandler();
    }
  }, [timeOutHandler, timer]);

  return (
    <div className={style.Timer}>
      <h1>
        Осталось:
        {
          timer
        }
      </h1>
    </div>
  );
}

Timer.propTypes = {
  isActive: PropTypes.bool,
  timeOutHandler: PropTypes.func,
  initialTime: PropTypes.number,
};

Timer.defaultProps = {
  isActive: '',
  timeOutHandler: () => {},
  initialTime: '',
};

export default Timer;
