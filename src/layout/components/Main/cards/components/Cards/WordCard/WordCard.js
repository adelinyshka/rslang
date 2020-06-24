import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { showAnswerSelector } from '../../../redux/selectors';

import styles from './WordCard.module.css';
import TestSentence from '../TestSentence/TestSentence';
import Intervals from '../Intervals/Intervals';

const WordCard = ({ cardInfo, isAnswered }) => {
  const {
    textExampleTranslate, wordTranslate, textExample, audio,
  } = cardInfo;
  const testSentenceArr = useMemo(
    () => textExample.split(/<b>[\w]{0,}<\/b>/), [textExample],
  );
  const word = useMemo(
    () => textExample.match(/<b>([\w]{0,})<\/b>/)[1], [textExample],
  );
  const playAudio = () => {
    new Audio('https://raw.githubusercontent.com/alekchaik/'
    + `rslang-data/master/${audio}`).play();
  };
  const showAnswer = useSelector(showAnswerSelector);
  return (
    <Card className={styles.Card}>
      <Card.Header>
        {
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
        }
      </Card.Header>
      <Card.Body>
        <Card.Text as="div">
          <p>{textExampleTranslate}</p>
          {(showAnswer || isAnswered) && (
            <p>
              Перевод:
              {' '}
              <span className={styles.AnsweredWord}>{wordTranslate}</span>
            </p>
          )}
          {(isAnswered) && (
            <button type="button" onClick={playAudio}>Play Word</button>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Intervals />
      </Card.Footer>
    </Card>
  );
};

WordCard.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  isAnswered: PropTypes.bool.isRequired,
};

export default WordCard;
