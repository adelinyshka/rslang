import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { showAnswerSelector } from '../../../redux/selectors';

import styles from './WordCard.module.css';
import TestSentence from '../TestSentence/TestSentence';
import Intervals from '../Intervals/Intervals';
import Navigation from '../Navigation/Navigation';

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
    <div className={styles.Container}>
      <Navigation />
      <Card className={styles.Card}>

        {(isAnswered) && (
          <Card.Header>
            <button type="button" onClick={playAudio}>Play Word</button>
          </Card.Header>
        )}
        <Card.Title />
        <Card.Body className={styles.Body}>
          <Card.Text as="div">
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

          </Card.Text>
        </Card.Body>
        <Card.Footer>

          <p>{textExampleTranslate}</p>
          {(showAnswer || isAnswered) && (

            <p>
              Перевод:
              {' '}
              <span className={styles.AnsweredWord}>{wordTranslate}</span>
            </p>
          )}
        </Card.Footer>
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
