import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import TestSentence from './TestSentence/TestSentence';

const WordCard = ({ cardInfo, isAnswered }) => {
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
    <Card>
      <Card.Body>
        <Card.Title>
          {
            isAnswered ? <p>{testArr.join(word)}</p>
              : (
                <TestSentence
                  testArr={testArr}
                  word={word}
                />
              )
          }

        </Card.Title>
        <Card.Text>
          <span>{textExampleTranslate}</span>
          <span>{wordTranslate}</span>
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
