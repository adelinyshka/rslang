import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
  showAnswerSelector,
  wasAnsweredSelector,
} from '../../redux/selectors';

import styles from './WordCard.module.css';
import TestSentence from '../TestSentence/TestSentence';
import Intervals from '../Intervals/Intervals';
import Navigation from '../Navigation/Navigation';

const WordCard = ({ cardInfo, isPreviousCard }) => {
  const showAnswer = useSelector(showAnswerSelector);
  const wasAnswered = useSelector(wasAnsweredSelector);
  const {
    textExampleTranslate, wordTranslate, textExample, audio,
  } = useMemo(() => cardInfo, [cardInfo]);
  const testSentenceArr = useMemo(
    () => textExample.split(/<b>[\w]{0,}<\/b>/), [textExample],
  );
  const word = useMemo(
    () => textExample.match(/<b>([\w]{0,})<\/b>/)[1], [textExample],
  );

  const playAudio = useCallback(() => {
    new Audio('https://raw.githubusercontent.com/alekchaik/'
    + `rslang-data/master/${audio}`).play();
  }, [audio]);

  const cardHeader = useMemo(() => (isPreviousCard || wasAnswered) && (
    <Card.Header>
      <div
        className={styles.Speaker}
        role="button"
        onClick={playAudio}
        tabIndex={0}
      >
        <img
          src="./assets/images/cards/speakerIcon.svg"
          alt="Прослушать слово"
        />
      </div>
    </Card.Header>
  ), [playAudio, isPreviousCard, wasAnswered]);

  const cardText = useMemo(() => (
    isPreviousCard || wasAnswered
      ? (
        <p>
          {testSentenceArr[0]}
          <span className={styles.AnsweredWord}>{word}</span>
          {testSentenceArr[1]}
        </p>
      )
      : (
        <TestSentence
          testSentenceArr={testSentenceArr}
          word={word}
          playAudio={playAudio}
        />
      )
  ), [playAudio, isPreviousCard, testSentenceArr, word, wasAnswered]);

  const cardFooter = useMemo(
    () => (showAnswer || isPreviousCard || wasAnswered) && (
      <Card.Footer>
        <p>
        Перевод:
          {' '}
          <span className={styles.AnsweredWord}>{wordTranslate}</span>
        </p>
      </Card.Footer>
    ), [wordTranslate, showAnswer, isPreviousCard, wasAnswered],
  );

  return (
    <div className={styles.Container}>
      <Navigation isPreviousCard={isPreviousCard} />
      <Card className={styles.Card}>
        {cardHeader}
        <Card.Body className={styles.Body}>
          {cardText}
          <hr />
          <p>{textExampleTranslate}</p>
        </Card.Body>
        {cardFooter}
      </Card>
      <Intervals showIntervals={isPreviousCard || wasAnswered} />
    </div>
  );
};

WordCard.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  isPreviousCard: PropTypes.bool.isRequired,
};

export default WordCard;
