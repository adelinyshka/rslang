import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { showAnswerSelector } from '../../../../redux/selectors';

import styles from './WordCard.module.css';
import TestSentence from './TestSentence/TestSentence';

const WordCard = ({ cardInfo, isAnswered }) => {
  const {
    textExampleTranslate, wordTranslate, textExample, audio,
  } = cardInfo;
  const testArr = useMemo(
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
    <Card>
      <Card.Body>
        <Card.Title>
          {
            isAnswered
              ? (
                <p>
                  {testArr[0]}
                  <span className={styles.AnsweredWord}>{word}</span>
                  {testArr[1]}
                </p>
              )
              : (
                <TestSentence
                  testArr={testArr}
                  word={word}
                  playAudio={playAudio}
                />
              )
          }
        </Card.Title>
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
    </Card>
  );
};

WordCard.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  isAnswered: PropTypes.bool.isRequired,
};

export default WordCard;
