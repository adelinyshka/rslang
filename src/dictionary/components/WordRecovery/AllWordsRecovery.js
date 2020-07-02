import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setAllRecovered } from '../../redux';
import styles from './WordRecovery.module.css';

const AllWordsRecovery = () => {
  const dispatch = useDispatch();
  const handleClick = useCallback((event) => {
    if (event.target.tagName !== 'IMG') return;
    dispatch(setAllRecovered(true));
    setTimeout(() => dispatch(setAllRecovered(false)));
  }, [dispatch]);

  return (
    <div
      className={styles.RecoveryContainer}
      onClick={handleClick}
    >
      <img
        src="/assets/images/dictionary/recoveryIcon.svg"
        alt="recover word"
      />
    </div>
  );
};

export default AllWordsRecovery;
