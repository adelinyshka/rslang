import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TestSentence = ({ testArr, word }) => {
  const [value, setValue] = useState();
  const checkWord = (event) => {
    event.preventDefault();
    if (value.toLowerCase() === word) alert('YES');
    else alert('NO');
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
};

export default TestSentence;
