import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TestSentence = ({
  testArr, word, cardsInfo, setCardsInfo,
}) => {
  const [value, setValue] = useState();
  const checkWord = (event) => {
    event.preventDefault();
    if (value.toLowerCase() === word) {
      alert('YES');
      const newCards = [...cardsInfo];
      newCards.shift();
      setCardsInfo(newCards);
      setValue('');
    } else alert('NO');
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
