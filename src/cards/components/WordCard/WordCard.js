import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
  isShowingAnswerSelector,
  wasAnsweredSelector,
} from '../../redux/selectors';

import styles from './WordCard.module.css';
import TestSentence from '../TestSentence/TestSentence';
import Intervals from '../Intervals/Intervals';
import Navigation from '../Navigation/Navigation';

const WordCard = ({ cardInfo, isPreviousCard }) => {
  const isShowingAnswer = useSelector(isShowingAnswerSelector);
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

  const speakerIcon = useMemo(() => (
    isPreviousCard || wasAnswered ? 'speakerOnIcon.svg' : 'speakerOffIcon.svg'
  ),
  [isPreviousCard, wasAnswered]);

  const headerStyling = useMemo(() => ({
    pointerEvents: (isPreviousCard || wasAnswered) ? 'auto' : 'none',
  }), [isPreviousCard, wasAnswered]);

  const playAudio = useCallback(() => {
    new Audio('https://raw.githubusercontent.com/alekchaik/'
      + `rslang-data/master/${audio}`).play();
  }, [audio]);

  const cardText = useMemo(() => (
    isPreviousCard || wasAnswered
      ? (
        <p className={styles.sentence}>
          {testSentenceArr[0]}
          <span className={styles.AnsweredWord}>{word}</span>
          {testSentenceArr[1]}
        </p>
      )
      : (
        <TestSentence
          className={styles.sentence}
          testSentenceArr={testSentenceArr}
          word={word}
          playAudio={playAudio}
        />
      )
  ), [playAudio, isPreviousCard, testSentenceArr, word, wasAnswered]);

  const cardFooter = useMemo(
    () => (isShowingAnswer || isPreviousCard || wasAnswered) && (
      <Card.Footer className={styles.Footer}>
        <p>
          Перевод:
          {' '}
          <span className={styles.TranslatedWord}>{wordTranslate}</span>
        </p>
      </Card.Footer>
    ), [wordTranslate, isShowingAnswer, isPreviousCard, wasAnswered],
  );

  return (
    <div className={styles.Container}>
      <Navigation isPreviousCard={isPreviousCard} />
      <Card className={styles.Card}>
        <Card.Header className={styles.Header}>
          <div
            className={styles.Speaker}
            role="button"
            onClick={playAudio}
            tabIndex={0}
            style={headerStyling}
          >
            <img
              src={`./assets/images/cards/${speakerIcon}`}
              alt="Прослушать слово"
            />
          </div>
        </Card.Header>
        <Card.Body className={styles.Body}>
          {cardText}
          <hr className={styles.Interval_hr} />
          <p className={styles.translated_sentence}>{textExampleTranslate}</p>
        </Card.Body>
        {cardFooter}
      </Card>
      <Intervals isPreviousCard={isPreviousCard} />
    </div>
  );
};

WordCard.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  isPreviousCard: PropTypes.bool.isRequired,
};

export default WordCard;
