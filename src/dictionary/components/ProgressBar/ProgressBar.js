import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ progressStatus }) => {
  const [progressClass, setProgressClass] = useState(null);

  useEffect(() => {
    switch (progressStatus) {
      case 5:
        setProgressClass(styles.Cyan);
        break;
      case 4:
        setProgressClass(styles.DarkGreen);
        break;
      case 3:
        setProgressClass(styles.Green);
        break;
      case 2:
        setProgressClass(styles.LightGreen);
        break;
      case 1:
        setProgressClass(styles.Orange);
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
        className={index < progressStatus ? progressClass : null}
      />
    ))
  ), [progressStatus, progressClass]);

  return (
    <div className={styles.ProgressBar}>
      {progressBar}
    </div>
  );
};

ProgressBar.propTypes = {
  progressStatus: PropTypes.number.isRequired,
};

export default ProgressBar;
