import React, {
  useState, useCallback, useMemo,
} from 'react';
import {
  Button,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Exit from '../../../../common/components/Modals/Exit';
import Rules from '../../../../common/components/Modals/Rules';

import Timer from '../Timer/Timer';
import useAPI from '../../../../common/utils';
import { userIdSelector } from '../../../../auth/redux/selectors';

import StyleGame from './style.Game';
import {
  wordsSelector,
  startGameSelector,
  levelSelector,
  scoreSelector,
  marksSelector,
  targetsSelector,
  rateSelector,
  soundStatusSelector,
  learnedWordsSelector,
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
  setSoundStatus,
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
  const soundStatus = useSelector(soundStatusSelector);
  const learnedWordsStatus = useSelector(learnedWordsSelector);
  const userID = useSelector(userIdSelector);

  const [count, setCount] = useState(0);

  const onOverGame = useCallback(
    () => dispatch(overGame()), [dispatch],
  );

  const userWordsURL = useMemo(
    () => (learnedWordsStatus ? `users/${userID}/aggregatedWords?wordsPerPage=150&filter={"userWord.optional.deleted":false}` : `words?page=0&group=${activeLevel}
    &wordsPerExampleSentenceLTE=1000&wordsPerPage=150`), [activeLevel, userID, learnedWordsStatus],
  );

  const action = useCallback(
    (data) => {
      const path = learnedWordsStatus ? data[0].paginatedResults : data;
      path.forEach((el) => {
        el.falsyTranslate = el.wordTranslate;
      });
      path.forEach((el) => {
        el.falsyTranslate = getRandomInt(2)
          ? path[getRandomInt(path.length - 1)].falsyTranslate
          : el.falsyTranslate;
        el.correctFlag = (el.falsyTranslate === el.wordTranslate);
      });
      dispatch(setWords(path));
    }, [dispatch, learnedWordsStatus],
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
    }, [dispatch, targets, rate],
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

  const audioRight = useCallback(() => {
    const Rightaudio = new Audio('/assets/audio/right.mp3');
    Rightaudio.play();
  }, []);

  const audioWrong = useCallback(() => {
    const Wrongaudio = new Audio('/assets/audio/wrong.mp3');
    Wrongaudio.play();
  }, []);

  const prononse = useCallback((n) => {
    const pronounce = new Audio(`${audioPath}${words[n].audio}`);
    pronounce.play();
  }, [words]);

  const onAnswer = useCallback(
    (word, answer) => {
      word.correctAnswer = (word.correctFlag === answer);
      if (soundStatus) {
        word.correctAnswer ? audioRight() : audioWrong();
      }
      changeMark(word.correctAnswer);
      changeScore(word.correctAnswer);
      gameResult.push(word);
      dispatch(setResult(gameResult));
    }, [dispatch, changeMark, changeScore, soundStatus, audioRight, audioWrong],
  );

  const onStartGame = useCallback(
    () => dispatch(startGame()), [dispatch],
  );

  // const handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     console.log('enter press here! ');
  //   }
  // };

  if (gameStarted) {
    return (
      <StyleGame>
        <div className="Main">
          <Rules
            rules="Если указан верный перевод слова - нажимайте 'Верно'"
          />
          <Exit noWhite={false} />
          <div className="UpperContainer">
            <div className="TaimerContainer">
              <Timer initialTime={60} timeOutHandler={onOverGame} />
            </div>

            <div className="ScoreContainer">
              <p className="Score">{score}</p>
            </div>

            <div className="Toolbar">
              <Exit />
              <label
                className="Notification_label"
              >
                <input
                  onChange={() => { dispatch(setSoundStatus(!soundStatus)); }}
                  className="Notification_input"
                  type="checkbox"
                  value="1"
                  name="k"
                />
                <span />
              </label>
            </div>
          </div>
          <div className="BlockWordContainer">
            <div className="BlockWord">

              <div className="Marks">
                {marks.map((type, index) => (
                  <img
                    key={index}
                    src={`/assets/images/sprint/${type}_mark.svg`}
                    alt="mark"
                  />
                ))}
              </div>

              <div className="Targets">
                <img src="/assets/images/sprint/hit_target.svg" alt="hint" />
                {targets.map((type, index) => (
                  <img
                    key={index}
                    src={`/assets/images/sprint/${type}_target.svg`}
                  />
                ))}
              </div>

              <div className="Words">
                <p className="EnWord">{words[count].word}</p>
                <p className="RuWord">{words[count].falsyTranslate}</p>
              </div>

              <div className="Buttons">
                <Button
                  className="Btn False"
                  onClick={() => {
                    setCount(count + 1);
                    onAnswer(words[count], false);
                    if (count === words.length - 1) dispatch(onOverGame());
                  }}
                >
                Не верно
                </Button>
                <Button
                  className="Btn True"
                  onClick={() => {
                    setCount(count + 1);
                    onAnswer(words[count], true);
                    if (count === words.length - 1) dispatch(onOverGame());
                  }}
                >
                Верно
                </Button>
              </div>

              <div className="Arrows">
                <img
                  className="Left"
                  src="/assets/images/sprint/left_arrow.svg"
                  alt="arrow left"
                />
                <img
                  className="Right"
                  src="/assets/images/sprint/right_arrow.svg"
                  alt="arrow right"
                />
              </div>

              <button
                className="Prononse"
                onClick={() => { prononse(count); }}
                type="button"
              >
                <img
                  className="Prononse_img"
                  src="/assets/images/sprint/sound.svg"
                />
              </button>

            </div>
          </div>
        </div>
      </StyleGame>
    );
  }
  return (
    <StyleGame>
      <Timer
        initialTime={5}
        timeOutHandler={onStartGame}
      />
    </StyleGame>
  );
}

export default Game;
