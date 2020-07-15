import React, {
  useState, useCallback, useMemo, useEffect,
} from 'react';
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
  scoreSelector,
  marksSelector,
  targetsSelector,
  rateSelector,
} from '../../redux/selectors';

import {
  overGame,
  setResult,
  setWords,
  startGame,
  setMarks,
  setTargets,
  setRate,
  setScore,
} from '../../redux';

const gameResult = [];

const audioPath = 'https://raw.githubusercontent.com/'
  + 'alekchaik/rslang-data/master/';

const fetchOptions = {
  method: 'GET',
};

let marksCombo = 0;
let targetsCombo = 0;
let activeMarks;
let activeTargets;

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

function Game() {
  const words = useSelector(wordsSelector);
  const gameStarted = useSelector(startGameSelector);
  const dispatch = useDispatch();
  const activeLevel = useSelector(levelSelector);
  const score = useSelector(scoreSelector);
  const marks = useSelector(marksSelector);
  const targets = useSelector(targetsSelector);
  const rate = useSelector(rateSelector);

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

  const changeScore = useCallback(
    (bool) => {
      if (bool) dispatch(setScore(score + (rate * 10)));
    }, [dispatch, rate, score],
  );

  const changeTargets = useCallback(
    (bool) => {
      activeTargets = targets;
      if (bool && targetsCombo < 3) {
        activeTargets[targetsCombo] = 'hit';
        targetsCombo += 1;
        dispatch(setRate(rate + 1));
      }
      if (!bool) {
        targetsCombo = 0;
        activeTargets = ['empty', 'empty', 'empty'];
        dispatch(setRate(1));
      }
      dispatch(setTargets([...activeTargets]));
    }, [dispatch, targets],
  );

  const changeMark = useCallback(
    (bool) => {
      activeMarks = marks;
      if (bool && marksCombo < 3) {
        activeMarks[marksCombo] = 'hit';
        marksCombo += 1;
      } else if (bool && marksCombo >= 3) {
        activeMarks = ['empty', 'empty', 'empty'];
        marksCombo = 0;
        changeTargets(true);
      } else {
        marksCombo = 0;
        activeMarks = ['empty', 'empty', 'empty'];
        changeTargets(false);
      }
      dispatch(setMarks([...activeMarks]));
    }, [marks, dispatch, changeTargets],
  );

  const onAnswer = useCallback(
    (word, answer) => {
      word.correctAnswer = (word.correctFlag === answer);
      changeMark(word.correctAnswer);
      changeScore(word.correctAnswer);
      gameResult.push(word);
      dispatch(setResult(gameResult));
    }, [dispatch, changeMark],
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
              <Timer initialTime={10000} timeOutHandler={onOverGame} />
            </div>

            <div className="ScoreContainer">
              <p className="Score">{score}</p>
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
                {marks.map((type, index) => <img key={index} src={`/assets/images/sprint/${type}_mark.svg`} />)}
              </div>

              <div className="Targets">
                <img src="/assets/images/sprint/hit_target.svg" />
                {targets.map((type, index) => <img key={index} src={`/assets/images/sprint/${type}_target.svg`} />)}
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

              <button className="Prononse" onClick={() => { prononse(count); }}>
                <img className="Prononse_img" src="/assets/images/sprint/sound.svg" />
              </button>

            </div>
          </div>
        </div>
      </StyleGame>
    );
  }
  return (<StyleGame><Timer initialTime={1} timeOutHandler={onStartGame} /></StyleGame>);
}

export default Game;
