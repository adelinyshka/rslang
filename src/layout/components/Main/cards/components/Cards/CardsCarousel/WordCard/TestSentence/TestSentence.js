import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { cardsInfoSelector } from '../../../../../redux/selectors';
import { changeCards, changeLastCard } from '../../../../../redux/actions';

const TestSentence = ({
  testArr, word,
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [isMistake, setIsMistake] = useState('');
  const [wasAnswered, setWasAnswered] = useState(false);
  const { cardsArr } = useSelector(cardsInfoSelector);
  let wordInput;

  const checkWord = (event) => {
    event.preventDefault();
    if (value.toLowerCase() === word) {
      alert('YES');
      const newCards = [...cardsArr];
      const activeCard = newCards.shift();
      if (isMistake) {
        newCards.push(activeCard);
      }
      dispatch(changeLastCard(activeCard));
      dispatch(changeCards(newCards));
      setWasAnswered(false);
      setIsMistake(false);
    } else {
      setIsMistake(true);
      setWasAnswered(true);
      alert('no');
    }
    setValue('');
  };

  useEffect(() => { wordInput.focus(); }, [testArr, word, wordInput]);

  return (
    <form onSubmit={checkWord}>
      {testArr[0]}
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        ref={(input) => { wordInput = input; }}
        placeholder={wasAnswered ? word : ''}
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
