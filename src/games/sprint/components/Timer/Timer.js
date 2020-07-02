import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Timer({ isActive, timeOutHandler, initialTime }) {
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    const timerID = setTimeout(() => setTimer(timer - 1), 1000);
    if (isActive) {
      if (timer <= 0) {
        clearTimeout(timerID);
        timeOutHandler();
      }
    } else {
      clearTimeout(timerID);
    }
  }, [timer]);

  return (
    <div>
      <h1>
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
  isActive: true,
  timeOutHandler: () => {},
  initialTime: '',
};

export default Timer;
