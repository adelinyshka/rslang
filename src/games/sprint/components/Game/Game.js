import React, { useState, useCallback, useMemo } from 'react';
import {
  Button,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import Timer from '../Timer/Timer';
import useAPI from '../../../../common/utils';

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
} from '../../redux';

const gameResult = [];

const audioPath = 'https://raw.githubusercontent.com/'
  + 'alekchaik/rslang-data/master/';

const fetchOptions = {
  method: 'GET',
};

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

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

  const prononse = useCallback((n) => {
    const pronounce = new Audio(`${audioPath}${words[n].audio}`);
    pronounce.play();
  }, [words]);

  if (gameStarted) {
    return (
      <StyleGame>
        <div className="Main">
          <div className="UpperContainer">

            <div className="TaimerContainer">
              <Timer initialTime={300} timeOutHandler={onOverGame} />
            </div>

            <div className="ScoreContainer">
              <p className="Score">100</p>
            </div>

            <div className="Toolbar">
              <img className="Close" src="/assets/images/sprint/bell_on.svg" />
              <label className="Notification_label">
                <input onChange={() => console.log('it works')} className="Notification_input" type="checkbox" value="1" name="k" />
                <span />
              </label>
            </div>
          </div>
          <div className="BlockWordContainer">
            <div className="BlockWord">

              <div className="Marks">
                <img src="/assets/images/sprint/empty_mark.svg" />
                {' '}
                {/* это переделаю, сейчас только для верстки */}
                <img src="/assets/images/sprint/empty_mark.svg" />
                <img src="/assets/images/sprint/empty_mark.svg" />
              </div>

              <div className="Targets">
                <img src="/assets/images/sprint/empty_target.svg" />
                <img src="/assets/images/sprint/empty_target.svg" />
                <img src="/assets/images/sprint/empty_target.svg" />
                <img src="/assets/images/sprint/empty_target.svg" />
              </div>

              <div className="Words">
                <p className="EnWord">{words[count].word}</p>
                <p className="RuWord">{words[count].falsyTranslate}</p>
              </div>

              <div className="Buttons">
                <Button className="Btn False" onClick={() => { setCount(count + 1); onAnswer(words[count], false); }}>Не верно</Button>
                <Button className="Btn True" onClick={() => { setCount(count + 1); onAnswer(words[count], true); }}>Верно</Button>
              </div>

              <div className="Arrows">
                <img className="Left" src="/assets/images/sprint/left_arrow.svg" />
                <img className="Right" src="/assets/images/sprint/right_arrow.svg" />
              </div>

              <div className="PrononseContainer">
                <button className="Prononse" onClick={() => { prononse(count); }}>звук</button>
              </div>
            </div>
          </div>
        </div>
      </StyleGame>
    );
  }
  return (<StyleGame><Timer initialTime={5} timeOutHandler={onStartGame} /></StyleGame>);
}

export default Game;
