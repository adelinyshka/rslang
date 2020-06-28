import React, { useState, useEffect, useMemo } from 'react';

const ProgressBar = ({ progressStatus }) => {
  const [progressClass, setProgressClass] = useState(null);

  useEffect(() => {
    switch (progressStatus) {
      case 5:
        setProgressClass('Blue');
        break;
      case 4:
        setProgressClass('DarkGreen');
        break;
      case 3:
        setProgressClass('Green');
        break;
      case 2:
        setProgressClass('LightGreen');
        break;
      case 1:
        setProgressClass('Orange');
        break;
      default:
        setProgressClass(null);
        break;
    }
  }, [progressStatus]);

  const progressBar = useMemo(() => (
    new Array(5).fill(null).map((el, index) => (
      <div
        key={`progressPoint${index}`}
        className={index <= progressStatus ? progressClass : null}
      />
    ))
  ), [progressStatus, progressClass]);

  return progressBar;
};

export default ProgressBar;
