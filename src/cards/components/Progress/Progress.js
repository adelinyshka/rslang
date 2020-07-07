import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';
import styles from './Progress.module.css';

const Progress = ({ cardsArr, newCardsAmount }) => {
  const cardsLeft = useMemo(
    () => (cardsArr ? cardsArr.length : newCardsAmount),
    [cardsArr, newCardsAmount],
  );
  const passedCards = useMemo(
    () => (newCardsAmount - cardsLeft),
    [newCardsAmount, cardsLeft],
  );
  return (
    <div className={styles.Progress}>
      0
      <ProgressBar
        now={passedCards}
        variant="success"
        className={styles.ProgressBar}
        min={0}
        max={newCardsAmount}
        label={`${passedCards}/${newCardsAmount}`}
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
