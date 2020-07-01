import React, { useState, useEffect, useCallback } from 'react';

function Timer({ setTimer, timerHandler }) {
  const [currentValue, setCurrent] = useState(setTimer);
  useEffect(() => {
    const id = setTimeout(() => decrement(), 1000);
    if (currentValue <= 0) {
      clearTimeout(id);
      timerHandler();
    }
  });

  const decrement = useCallback(
    () => {
      setCurrent(currentValue - 1);
    }, [currentValue],
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
