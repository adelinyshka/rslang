import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { cardsInfoSelector } from '../../../../../redux/selectors';
import {
  changeCards, changeLastCard, hideAnswer,
} from '../../../../../redux/actions';
import styles from './TestSentence.module.css';

const mistakesInWord = (wrongWord, word) => {
  const rightLetters = word.split('');
  return rightLetters.map((el, i) => (el === wrongWord[i]
    ? (
      <span
        key={`letter${i}`}
        className={styles.RightLetter}
      >
        {wrongWord[i]}
      </span>
    )
    : (
      <span
        key={`letter${i}`}
        className={styles.WrongLetter}
      >
        {el}
      </span>
    )));
};

const TestSentence = ({
  testSentenceArr, word, playAudio,
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [mistakes, setMistake] = useState([]);
  const [wasAnswered, setWasAnswered] = useState(false);
  const { cardsArr } = useSelector(cardsInfoSelector);
  const wrongAnswers = useMemo(() => mistakes.map((wrongWord, i) => (
    <p key={`wrongWord${i}`}>
      {testSentenceArr[0]}
      {mistakesInWord(wrongWord, word)}
      {testSentenceArr[1]}
    </p>
  )), [word, mistakes, testSentenceArr]);
  let wordInput;

  const checkWord = useCallback((event) => {
    event.preventDefault();
    if (value.toLowerCase() === word) {
      const newCards = [...cardsArr];
      const activeCard = newCards.shift();
      if (mistakes.length) {
        newCards.push(activeCard);
      }
      setWasAnswered(false);
      dispatch(changeLastCard(activeCard));
      dispatch(changeCards(newCards));
      dispatch(hideAnswer());
      setMistake([]);
    } else {
      const newMistakes = [...mistakes];
      newMistakes.push(value);
      setMistake(newMistakes);
      setWasAnswered(true);
    }
    setValue('');
    if (!wasAnswered) playAudio();
  }, [cardsArr, mistakes, value, wasAnswered, word, playAudio, dispatch]);

  useEffect(() => { wordInput.focus(); }, [wordInput]);

  return (
    <>
      <form onSubmit={checkWord}>
        {testSentenceArr[0]}
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          ref={(input) => { wordInput = input; }}
          placeholder={wasAnswered ? word : ''}
        />
        {testSentenceArr[1]}
      </form>
      <div>
        {wrongAnswers}
      </div>
    </>
  );
};

TestSentence.propTypes = {
  testSentenceArr: PropTypes.array.isRequired,
  word: PropTypes.string.isRequired,
  playAudio: PropTypes.func.isRequired,
};

export default TestSentence;
