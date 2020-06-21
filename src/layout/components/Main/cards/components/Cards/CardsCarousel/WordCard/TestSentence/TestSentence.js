import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { cardsInfo } from '../../../../../redux/selectors';
import { changeCards } from '../../../../../redux/actions';

const TestSentence = ({
  testArr, word,
}) => {
  const [value, setValue] = useState('');
  const [isMistake, setIsMistake] = useState('');
  const dispatch = useDispatch();
  const { cardsArr } = useSelector(cardsInfo);

  const checkWord = (event) => {
    event.preventDefault();
    if (value.toLowerCase() === word) {
      alert('YES');
      const newCards = [...cardsArr];
      const activeCard = newCards.shift();
      if (isMistake) {
        newCards.push(activeCard);
      }
      dispatch(changeCards(newCards));
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
};

export default TestSentence;
