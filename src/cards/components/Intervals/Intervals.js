import React, { useCallback } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, batch } from 'react-redux';
import {
  setCards, setLastCard, setAnswered, clearAnswer,
  setRightAnswers,
} from '../../redux';
import {
  cardsArrSelector,
  wasMistakenSelector,
  wasAnsweredSelector,
  rightAnswersSelector,
} from '../../redux/selectors';
import styles from './Intervals.module.css';

const intervalButtonsInfo = [
  {
    title: 'Повтор',
    bg: '#6979F8',
  },
  {
    title: 'Легко',
    bg: '#DB7CF5',
  },
  {
    title: 'Средне',
    bg: '#AA5DDB',
  },
  {
    title: 'Сложно',
    bg: '#7348BF',
  },
];

const Intervals = ({ wordId }) => {
  const dispatch = useDispatch();
  const cardsArr = useSelector(cardsArrSelector);
  const wasMistaken = useSelector(wasMistakenSelector);
  const wasAnswered = useSelector(wasAnsweredSelector);
  const rightAnswers = useSelector(rightAnswersSelector);

  const intervalButtons = useCallback((clicked) => (
    intervalButtonsInfo.map(({ title, bg }) => (
      <Button
        className={styles.interval_btn}
        style={{ background: bg, border: bg }}
        key={title}
        onClick={clicked}
      >
        {title}
      </Button>
    ))
  ), []);

  const handleButton = useCallback(() => {
    const newCards = [...cardsArr];
    const lastCard = newCards.shift();
    if (wasMistaken || !wasAnswered) {
      newCards.push(lastCard);
    }
    if (!wasMistaken && wasAnswered) {
      dispatch(setRightAnswers(rightAnswers + 1));
    }
    batch(() => {
      dispatch(setCards(newCards));
      dispatch(setLastCard(lastCard));
      dispatch(clearAnswer());
    });
  }, [cardsArr, dispatch, wasMistaken, wasAnswered, rightAnswers]);

  return (
    <div className={styles.Intervals}>
      {
        wasAnswered
          ? intervalButtons(handleButton)
          : (
            <Button
              type="Button"
              className={styles.showAnswer}
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
  wordId: PropTypes.string.isRequired,
};

export default Intervals;
