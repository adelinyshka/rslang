import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Timer from '../Timer/Timer';

import StyleGame from './style.Game';

import {
  resultsSelector,
  wordsSelector,
} from '../../redux/selectors';

import {
  overGame,
  setResult,
} from '../../redux/index';

const gameResult = [];

function Game() {
  const words = useSelector(wordsSelector);
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const onOverGame = useCallback(
    () => dispatch(overGame()), [dispatch],
  );
  const onAnswer = useCallback(
    (word, answer) => {
      word.correctAnswer = (word.correctFlag === answer);
      gameResult.push(word);
      dispatch(setResult(gameResult));
    }, [dispatch],
  );

  return (
    <StyleGame>
      <Timer initialTime={4} timeOutHandler={onOverGame} />
      <p>{words[count].word}</p>
      <p>{words[count].falsyTranslate}</p>
      <button onClick={() => { setCount(count + 1); onAnswer(words[count], true); }}>верно</button>
      <button onClick={() => { setCount(count + 1); onAnswer(words[count], false); }}>неверно</button>
    </StyleGame>
  );
}

export default Game;
