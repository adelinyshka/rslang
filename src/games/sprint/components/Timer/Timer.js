import React, { useState, useEffect, useCallback } from 'react';

function Timer({ setTimer, timerHandler }) {
  const [currentValue, setCurrent] = useState(setTimer);
  useEffect(() => {
    const id = setTimeout(() => dec(), 1000);
  });
  const dec = useCallback(
    () => {
      if (currentValue <= 0) {
        clearTimeout(this);
        timerHandler();
      } else {
        setCurrent(currentValue - 1);
      }
    },
    [currentValue],
  );

  return (
    <div>
      <p>
        {currentValue}
      </p>
    </div>
  );
}

export default Timer;
