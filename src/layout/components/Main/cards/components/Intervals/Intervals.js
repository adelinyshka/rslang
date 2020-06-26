import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCards, setLastCard, setAnswered, clearAnswer,
} from '../../redux';
import {
  cardsArrSelector,
  wasMistakenSelector,
  wasAnsweredSelector,
} from '../../redux/selectors';
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

const Intervals = ({ isPreviousCard }) => {
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
    dispatch(setCards(newCards));
    dispatch(setLastCard(lastCard));
    dispatch(clearAnswer());
  }, [cardsArr, dispatch, wasMistaken, wasAnswered]);

  if (isPreviousCard) return null;

  return (
    <div className={styles.Intervals}>
      {
        wasAnswered
          ? (
            <>
              {intervalButtons(handleButton)}
            </>
          )
          : (
            <Button
              type="Button"
              onClick={() => dispatch(setAnswered(true))}
            >
              Показать ответ
            </Button>
          )
      }
    </div>
  );
};

Intervals.propTypes = {
  isPreviousCard: PropTypes.bool.isRequired,
};

export default Intervals;
