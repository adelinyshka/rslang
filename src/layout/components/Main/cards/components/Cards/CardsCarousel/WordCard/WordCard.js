import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
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
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {
            isAnswered ? <p>{testArr.join(word)}</p>
              : (
                <TestSentence
                  testArr={testArr}
                  word={word}
                  playAudio={playAudio}
                />
              )
          }
        </Card.Title>
        <Card.Subtitle>
          <button type="button" onClick={playAudio}>Play Word</button>
        </Card.Subtitle>
        <Card.Text as="div">
          <p>{textExampleTranslate}</p>
          <p>{wordTranslate}</p>
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
