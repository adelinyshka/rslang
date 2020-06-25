import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { showAnswerSelector } from '../../../redux/selectors';

import styles from './WordCard.module.css';
import TestSentence from '../TestSentence/TestSentence';
import Intervals from '../Intervals/Intervals';
import Navigation from '../Navigation/Navigation';

const WordCard = ({ cardInfo, isAnswered }) => {
  const showAnswer = useSelector(showAnswerSelector);
  const {
    textExampleTranslate, wordTranslate, textExample, audio,
  } = cardInfo;
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

  const cardText = useMemo(() => (
    isAnswered
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
  ), [playAudio, isAnswered, testSentenceArr, word]);

  const cardHeader = useMemo(() => isAnswered && (
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
  ), [playAudio, isAnswered]);

  const cardFooter = useMemo(() => (showAnswer || isAnswered) && (
    <Card.Footer>
      <p>
              Перевод:
        {' '}
        <span className={styles.AnsweredWord}>{wordTranslate}</span>
      </p>
    </Card.Footer>
  ), [wordTranslate, showAnswer, isAnswered]);

  return (
    <div className={styles.Container}>
      <Navigation isAnswered={isAnswered} />
      <Card className={styles.Card}>
        {cardHeader}
        <Card.Body className={styles.Body}>
          <Card.Text as="div">
            {cardText}
            <hr />
            <p>{textExampleTranslate}</p>
          </Card.Text>
        </Card.Body>
        {cardFooter}
      </Card>
      <Intervals />
    </div>
  );
};

WordCard.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  isAnswered: PropTypes.bool.isRequired,
};

export default WordCard;
