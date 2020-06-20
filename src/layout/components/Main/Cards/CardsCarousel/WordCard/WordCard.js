import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import TestSentence from './TestSentence/TestSentence';

const WordCard = ({ cardInfo }) => {
  const {
    word, textExampleTranslate, wordTranslate, textExample,
  } = cardInfo;
  const testArr = useCallback(
    () => textExample.split(`<b>${word}</b>`), [word, textExample],
  );
  return (
    <Card style={{ width: '50%', margin: '0 auto' }}>
      <Card.Body>
        <Card.Title>
          <TestSentence testArr={testArr()} word={word} />
        </Card.Title>
        <Card.Text>
          <p>{textExampleTranslate}</p>
          <p>{wordTranslate}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

WordCard.propTypes = {
  cardInfo: PropTypes.object.isRequired,
};

export default WordCard;
