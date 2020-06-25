import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeCards, changeLastCard, submitAnswer, clearAnswer,
} from '../../../redux/actions';
import {
  cardsArrSelector,
  wasMistakenSelector,
  wasAnsweredSelector,
} from '../../../redux/selectors';
import styles from './Intervals.module.css';

const intervalButtonsInfo = [
  {
    title: 'Повтор',
  },
  {
    title: 'Легко',
  },
  {
    title: 'Средне',
  },
  {
    title: 'Сложно',
  },
];

const Intervals = ({ showIntervals }) => {
  const dispatch = useDispatch();
  const cardsArr = useSelector(cardsArrSelector);
  const wasMistaken = useSelector(wasMistakenSelector);
  const wasAnswered = useSelector(wasAnsweredSelector);

  const intervalButtons = useCallback((clicked) => (
    intervalButtonsInfo.map(({ title }) => (
      <Button key={title} onClick={clicked}>{title}</Button>
    ))
  ), []);

  const handleButton = useCallback(() => {
    const newCards = [...cardsArr];
    const lastCard = newCards.shift();
    if (wasMistaken || !wasAnswered) {
      newCards.push(lastCard);
    }
    dispatch(changeCards(newCards));
    dispatch(changeLastCard(lastCard));
    dispatch(clearAnswer());
  }, [cardsArr, dispatch, wasMistaken, wasAnswered]);

  return (
    <div className={styles.Intervals}>
      {
        showIntervals
          ? (
            <>
              {intervalButtons(handleButton)}
            </>
          )
          : (
            <Button
              type="Button"
              onClick={() => dispatch(submitAnswer())}
            >
              Показать ответ
            </Button>
          )
      }
    </div>
  );
};

Intervals.propTypes = {
  showIntervals: PropTypes.bool.isRequired,
};

export default Intervals;
