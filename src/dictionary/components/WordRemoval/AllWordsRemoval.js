import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setAllDeleted } from '../../redux/index';
import styles from './WordRemoval.module.css';

const AllWordsRemoval = () => {
  const dispatch = useDispatch();
  const handleClick = useCallback((event) => {
    if (event.target.tagName !== 'IMG') return;
    dispatch(setAllDeleted(true));
    setTimeout(() => dispatch(setAllDeleted(false)));
  },
  [dispatch]);

  return (
    <div
      className={styles.DeleteContainer}
      onClick={handleClick}
    >
      <img src="/assets/images/dictionary/deleteIcon.svg" alt="delete word" />
    </div>
  );
};

export default AllWordsRemoval;
