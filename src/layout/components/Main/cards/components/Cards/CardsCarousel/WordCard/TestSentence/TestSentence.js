import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { cardsInfoSelector } from '../../../../../redux/selectors';
import { changeCards, changeLastCard } from '../../../../../redux/actions';

const TestSentence = ({
  testArr, word, playAudio,
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [mistakes, setMistake] = useState([]);
  const [wasAnswered, setWasAnswered] = useState(false);
  const { cardsArr } = useSelector(cardsInfoSelector);
  const wrongAnswers = useMemo(() => mistakes.map((wrongWord) => (
    <p>
      {testArr[0]}
      {wrongWord}
      {testArr[1]}
    </p>
  )), [mistakes, testArr]);
  let wordInput;

  const checkWord = (event) => {
    event.preventDefault();
    if (value.toLowerCase() === word) {
      const newCards = [...cardsArr];
      const activeCard = newCards.shift();
      if (mistakes.length) {
        newCards.push(activeCard);
      }
      dispatch(changeLastCard(activeCard));
      dispatch(changeCards(newCards));
      setWasAnswered(false);
      setMistake([]);
    } else {
      const newMistakes = [...mistakes];
      newMistakes.push(value);
      setMistake(newMistakes);
      setWasAnswered(true);
    }
    setValue('');
    if (!wasAnswered) playAudio();
  };

  useEffect(() => { wordInput.focus(); }, [testArr, word, wordInput]);

  return (
    <>
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
      <div>
        {wrongAnswers}
      </div>
    </>
  );
};

TestSentence.propTypes = {
  testArr: PropTypes.array.isRequired,
  word: PropTypes.string.isRequired,
  playAudio: PropTypes.func.isRequired,
};

export default TestSentence;
