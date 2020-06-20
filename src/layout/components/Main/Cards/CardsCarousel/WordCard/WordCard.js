import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import TestSentence from './TestSentence/TestSentence';

const WordCard = ({ cardInfo }) => {
  const {
    textExampleTranslate, wordTranslate, textExample,
  } = cardInfo;
  const testArr = useMemo(
    () => textExample.split(/<b>[\w]{0,}<\/b>/), [textExample],
  );
  const word = useMemo(
    () => textExample.match(/<b>([\w]{0,})<\/b>/)[1], [textExample],
  );

  return (
    <Card style={{ width: '50%', margin: '0 auto' }}>
      <Card.Body>
        <Card.Title>
          <TestSentence testArr={testArr} word={word} />
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
