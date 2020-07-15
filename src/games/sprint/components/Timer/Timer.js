import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StyleTimer from './style.Timer';

function Timer({ isActive, timeOutHandler, initialTime }) {
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    const timerID = setTimeout(() => {
      if (timer > 0 && isActive) setTimer(timer - 1);
    }, 1000);
    return () => clearTimeout(timerID);
  }, [timer, isActive]);
  useEffect(() => {
    if (timer <= 0) timeOutHandler();
  }, [timeOutHandler, timer]);

  return (
    <StyleTimer>
      <p>
        {
          timer
        }
      </p>
    </StyleTimer>
  );
}

Timer.propTypes = {
  isActive: PropTypes.bool,
  timeOutHandler: PropTypes.func,
  initialTime: PropTypes.number,
};

Timer.defaultProps = {
  isActive: true,
  timeOutHandler: () => {},
  initialTime: '',
};

export default Timer;
