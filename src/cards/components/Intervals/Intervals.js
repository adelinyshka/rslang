import React, { useCallback, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, batch } from 'react-redux';
import {
  setCards, setLastCard, setAnswered, clearAnswer,
  setRightAnswers, pushMistakenWord,
} from '../../redux';
import {
  cardsArrSelector,
  wasAnsweredSelector,
  rightAnswersSelector,
  mistakenWordsSelector,
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
  // const wasMistaken = useSelector(wasMistakenSelector);
  const wasAnswered = useSelector(wasAnsweredSelector);
  const rightAnswers = useSelector(rightAnswersSelector);

  const mistakenWords = useSelector(mistakenWordsSelector);
  const wasMistaken = useMemo(
    () => mistakenWords[wordId], [mistakenWords, wordId],
  );

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
      batch(() => {
        const newMistakenWord = {};
        newMistakenWord[wordId] = false;
        dispatch(setRightAnswers(rightAnswers - 1));
        dispatch(pushMistakenWord(newMistakenWord));
      });
    }
    if (!wasMistaken && wasAnswered) {
      dispatch(setRightAnswers(rightAnswers + 1));
    }
    batch(() => {
      dispatch(setCards(newCards));
      dispatch(setLastCard(lastCard));
      dispatch(clearAnswer());
    });
  }, [cardsArr, dispatch, wasMistaken, wasAnswered, rightAnswers, wordId]);

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
