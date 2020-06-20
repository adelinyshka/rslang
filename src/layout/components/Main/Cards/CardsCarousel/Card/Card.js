import React, { useCallback } from 'react';
import TestSentence from './TestSentence/TestSentence';

const Card = ({ cardInfo }) => {
  const {
    word, textExampleTranslate, wordTranslate, textExample,
  } = cardInfo;
  const testArr = useCallback(() => textExample.split(`<b>${word}</b>`), [word, textExample]);
  return (
    <div style={{ height: '500px', color: 'white', textAlign: 'center' }}>
      <TestSentence testArr={testArr()} word={word} />
      <p>{textExampleTranslate}</p>
      <p>{wordTranslate}</p>
    </div>
  );
};
export default Card;
