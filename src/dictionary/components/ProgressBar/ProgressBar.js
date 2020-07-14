import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.module.css';

const classNames = require('classnames');

const ProgressBar = ({ progressStatus }) => {
  const [progressClass, setProgressClass] = useState(null);

  useEffect(() => {
    switch (true) {
      case (progressStatus >= 5):
        setProgressClass(styles.Cyan);
        break;
      case progressStatus === 4:
        setProgressClass(styles.DarkGreen);
        break;
      case progressStatus === 3:
        setProgressClass(styles.Green);
        break;
      case progressStatus === 2:
        setProgressClass(styles.LightGreen);
        break;
      case progressStatus === 1:
        setProgressClass(styles.Orange);
        break;
      default:
        setProgressClass(null);
        break;
    }
  }, [progressStatus]);

  const progressBar = useMemo(() => (
    new Array(5).fill(null).map((el, index) => {
      const barClassName = {};
      barClassName[progressClass] = index < progressStatus;
      return (
        <div
          key={`progressPoint${index}`}
          className={classNames(barClassName)}
        />
      );
    })
  ), [progressStatus, progressClass]);

  return (
    <div className={styles.ProgressBar}>
      {progressBar}
    </div>
  );
};

ProgressBar.propTypes = {
  progressStatus: PropTypes.number,
};

ProgressBar.defaultProps = {
  progressStatus: 0,
};

export default ProgressBar;
