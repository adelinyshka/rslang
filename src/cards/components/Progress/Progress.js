import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styles from './Progress.module.css';
import { cardsTotalSelector, passedCardsSelector } from '../../redux/selectors';

const Progress = () => {
  const cardsTotal = useSelector(cardsTotalSelector);
  const passedCards = useSelector(passedCardsSelector);
  return (
    <div className={styles.Progress}>
      0
      <ProgressBar
        now={passedCards}
        variant="success"
        className={styles.ProgressBar}
        min={0}
        max={cardsTotal}
        label={`${passedCards}/${cardsTotal}`}
      />
      {cardsTotal}
    </div>
  );
};

export default Progress;
