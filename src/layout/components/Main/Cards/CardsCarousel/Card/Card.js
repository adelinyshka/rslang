import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import TestSentence from './TestSentence/TestSentence';

const Card = ({ cardInfo }) => {
  const {
    word, textExampleTranslate, wordTranslate, textExample,
  } = cardInfo;
  const testArr = useCallback(
    () => textExample.split(`<b>${word}</b>`), [word, textExample],
  );
  return (
    <div style={{ height: '500px', color: 'white', textAlign: 'center' }}>
      <TestSentence testArr={testArr()} word={word} />
      <p>{textExampleTranslate}</p>
      <p>{wordTranslate}</p>
    </div>
  );
};

Card.propTypes = {
  cardInfo: PropTypes.object.isRequired,
};
export default Card;
