import React, { useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Timer from '../Timer/Timer';
import TimerWrapper from '../Timer/style.TimerWrapper';
import useAPI from '../../../../common/utils/index';

import StyleGame from './style.Game';

import {
  resultsSelector,
  wordsSelector,
  startGameSelector,
  overGameSelector,
  levelSelector,
} from '../../redux/selectors';

import {
  overGame,
  setResult,
  setWords,
  startGame,
} from '../../redux/index';

const gameResult = [];

const audioPath = 'https://raw.githubusercontent.com/'
  + 'alekchaik/rslang-data/master/';

const fetchOptions = {
  method: 'GET',
};

function Game() {
  const words = useSelector(wordsSelector);
  const gameStarted = useSelector(startGameSelector);
  const dispatch = useDispatch();
  const activeLevel = useSelector(levelSelector);

  const [count, setCount] = useState(0);

  const onOverGame = useCallback(
    () => dispatch(overGame()), [dispatch],
  );

  const userWordsURL = useMemo(
    () => `words?page=0&group=${activeLevel}
    &wordsPerExampleSentenceLTE=1000&wordsPerPage=300`, [activeLevel],
  );

  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  const action = useCallback(
    (data) => {
      data.forEach((el) => {
        el.falsyTranslate = el.wordTranslate;
      });
      data.forEach((el) => {
        el.falsyTranslate = getRandomInt(2)
          ? data[getRandomInt(data.length - 1)].falsyTranslate
          : el.falsyTranslate;
        el.correctFlag = (el.falsyTranslate === el.wordTranslate);
      });
      (dispatch(setWords(data)));
    }, [dispatch],
  );

  useAPI(userWordsURL, fetchOptions, action);

  const onAnswer = useCallback(
    (word, answer) => {
      word.correctAnswer = (word.correctFlag === answer);
      gameResult.push(word);
      dispatch(setResult(gameResult));
    }, [dispatch],
  );

  const onStartGame = useCallback(
    () => dispatch(startGame()), [dispatch],
  );

  const prononse = useCallback(
    (count) => {
      const pronounce = new Audio(`${audioPath}${words[count].audio}`);
      pronounce.play();
    }, [count],
  );

  if (gameStarted) {
    return (
      <StyleGame>
        <div className="taimerContainer">
          <Timer initialTime={60} timeOutHandler={onOverGame} />
        </div>
        <p>{words[count].word}</p>
        <p>{words[count].falsyTranslate}</p>

        <button onClick={() => { setCount(count + 1); onAnswer(words[count], true); }}>верно</button>
        <button onClick={() => { setCount(count + 1); onAnswer(words[count], false); }}>неверно</button>
        <button onClick={() => { prononse(count); }}>звук</button>
      </StyleGame>
    );
  }
  return (<TimerWrapper><Timer initialTime={5} timeOutHandler={onStartGame} /></TimerWrapper>);
}

export default Game;
