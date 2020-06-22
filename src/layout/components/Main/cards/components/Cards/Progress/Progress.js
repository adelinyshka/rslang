import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';
import styles from './Progress.module.css';

const Progress = ({ cardsArr, newCardsAmount }) => {
  const cardsLeft = cardsArr ? cardsArr.length : 0;
  const passedCards = newCardsAmount - cardsLeft;
  return (
    <div className={styles.Progress}>
      0
      <ProgressBar
        now={passedCards}
        className={styles.ProgressBar}
        min={0}
        max={newCardsAmount}
      />
      {newCardsAmount}
    </div>
  );
};

Progress.propTypes = {
  cardsArr: PropTypes.array.isRequired,
  newCardsAmount: PropTypes.number.isRequired,
};

export default Progress;
