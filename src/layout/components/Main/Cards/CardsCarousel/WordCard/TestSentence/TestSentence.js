import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TestSentence = ({
  testArr, word, cardsInfo, setCardsInfo,
}) => {
  const [value, setValue] = useState();
  const [isMistake, setIsMistake] = useState();
  console.log(word);
  const checkWord = (event) => {
    event.preventDefault();
    if (value.toLowerCase() === word) {
      alert('YES');
      const newCards = [...cardsInfo];
      const activeCard = newCards.shift();
      if (isMistake) {
        newCards.push(activeCard);
      }
      setCardsInfo(newCards);
      setValue('');
      setIsMistake(false);
    } else {
      setIsMistake(true);
      alert('no');
    }
  };
  return (
    <form onSubmit={checkWord}>
      {testArr[0]}
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {testArr[1]}
    </form>
  );
};

TestSentence.propTypes = {
  testArr: PropTypes.array.isRequired,
  word: PropTypes.string.isRequired,
  cardsInfo: PropTypes.array.isRequired,
  setCardsInfo: PropTypes.func.isRequired,
};

export default TestSentence;
