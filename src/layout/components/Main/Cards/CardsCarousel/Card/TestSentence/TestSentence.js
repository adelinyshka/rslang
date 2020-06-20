import React, { useState } from 'react';

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

export default TestSentence;
