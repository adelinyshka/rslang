import React, {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  submitAnswer, answeredRight, answeredWrong,
} from '../../redux/actions';
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
  const [mistake, setMistake] = useState();
  const wrongAnswer = useMemo(() => mistake && (
    <div>
      {testSentenceArr[0]}
      <span className={styles.WrongAnswer}>
        {mistakesInWord(mistake, word)}
      </span>
      {testSentenceArr[1]}
    </div>
  ), [word, mistake, testSentenceArr]);
  let wordInput;

  useEffect(() => { wordInput.focus(); }, [wordInput]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if (value.toLowerCase() === word) {
      if (!mistake) dispatch(answeredRight());
      playAudio();
      setMistake();
      dispatch(submitAnswer());
    } else {
      dispatch(answeredWrong());
      setMistake(value);
    }
    setValue('');
  }, [playAudio, value, word, setMistake, dispatch, mistake]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          {testSentenceArr[0]}
          <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            ref={(input) => { wordInput = input; }}
            required
          />
          {testSentenceArr[1]}
        </p>
      </form>
      {wrongAnswer}
    </>
  );
};

TestSentence.propTypes = {
  testSentenceArr: PropTypes.array.isRequired,
  word: PropTypes.string.isRequired,
  playAudio: PropTypes.func.isRequired,
};

export default TestSentence;
