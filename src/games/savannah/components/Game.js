import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import dictionary from './Dictionary';
import GameWrapper from './GameWrapper';
import { getRandomNumber, shuffle } from './Helpers';
import Lives from './Lives';
import { Rules, Exit } from './Modal';
import SoundSwitcher from '../../../common/components/SoundSwitcher';
import fetchJSON from '../../../common/utils/index';
import { setStatusGame } from '../redux';

const classNames = require('classnames');

let counterCrystalSize = 0.7;
const audioRight = new Audio('/assets/audio/right.mp3');
const audioWrong = new Audio('/assets/audio/wrong.mp3');

export default function Game() {
  const dispatch = useDispatch();
  const [gettingWords, setGettingWords] = useState(true);
  const [livesCount, setLivesCount] = useState(5);
  const [word, setWord] = useState('');
  const [answer, setAnswer] = useState('');
  const [rightAnswer, setRightAnswer] = useState('');
  const [btnClicked, setBtnClicked] = useState(false);
  const [scaleSize, setScaleSize] = useState(counterCrystalSize);
  const [arrOfWords, setArrOfWords] = useState([]);
  const [wordCounter, setWordCounter] = useState(40);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isRules, setIsRules] = useState(false);
  const [isExit, setIsExit] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const [page, setPage] = useState(1);
  const [group, setGroup] = useState(1);

  // useEffect(() => {
  //   fetchJSON(`words?page=${page}&group=${group}`)
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, [page, group]);

  const playSound = useCallback((isAnswerRight) => {
    if (soundOn) {
      if (isAnswerRight) audioRight.play();
      else audioWrong.play();
    }
  }, [soundOn]);

  const onExit = useCallback(() => {
    dispatch(setStatusGame(false));
    setIsExit(false);
  }, [dispatch]);

  const gameOverHandler = useCallback(() => {
    setIsGameOver(true);
    setWord(' ');
    setGettingWords(false);
    setArrOfWords([]);
    setLivesCount(0);
  }, []);

  useEffect(() => {
    if (gettingWords && livesCount && wordCounter) {
      const randomNumber = getRandomNumber();
      const newWord = dictionary[randomNumber].word;
      const newAnswer = dictionary[randomNumber].translate;
      setWord(newWord);
      setRightAnswer(newAnswer);
      const arrOfTranslations = [];
      arrOfTranslations.push(newAnswer);

      let counter = 0;
      while (counter < 3) {
        const translation = dictionary[getRandomNumber()].translate;
        arrOfTranslations.push(translation);
        counter += 1;
      }

      const shuffledTranslations = shuffle(arrOfTranslations);

      setArrOfWords(shuffledTranslations);
      setGettingWords(false);
    }

    if (!wordCounter) {
      gameOverHandler();
    }
  }, [livesCount, gettingWords, wordCounter]);

  function checkAnswer(wordActive, answerActive) {
    const correct = wordActive === answerActive;
    setAnswer(correct);
    setBtnClicked(correct);
    setWordCounter(wordCounter - 1);
    playSound(correct);
    if (correct) setScaleSize(counterCrystalSize += 0.02);
    else setLivesCount(livesCount - 1);
  }

  const refreshWordsOnClick = useCallback(() => {
    setTimeout(() => {
      setGettingWords(true);
      setAnswer(false);
      setBtnClicked(false);
    }, 500);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (livesCount) {
        setGettingWords(true);
        setAnswer(false);
        setLivesCount(livesCount - 1);
        playSound(false);
      }
    }, 4650);

    return () => {
      clearTimeout(timer);
    };
  }, [livesCount, answer]);

  return (
    <GameWrapper>
      {isExit ? (
        <Exit
          onCancel={() => setIsExit(false)}
          onExit={onExit}
        />
      ) : false}
      {isRules ? (
        <Rules
          onRules={() => setIsRules(false)}
        />
      ) : false}
      <img
        className="tree-wave"
        src="/assets/images/savannah/tree_waved.svg"
        alt="tree waved"
      />
      <img
        className="tree-tall"
        src="/assets/images/savannah/tree_tall.svg"
        alt="tree tall"
      />
      <SoundSwitcher onClick={() => setSoundOn()} />
      <div
        onClick={() => setIsRules(true)}
      >
        <img
          className="question"
          src="/assets/images/savannah/question.svg"
          alt="question with info about game"
        />
      </div>
      <div
        onClick={ () => setIsExit(true)}
      >
        <img
          className="cross"
          src="/assets/images/savannah/x_white.svg"
          alt="close"
        />
      </div>

      <Lives
        livesCount={livesCount}
        leftLifesHandler={gameOverHandler}
        src="/assets/images/savannah/heart_full.svg"
      />
      {
        isGameOver
          ? <h2 style={{ textAlign: 'center', color: 'red' }}>Game Over</h2>
          : ''
      }
      <div
        className={classNames('wrapper_falling',
          { 'animation': !btnClicked },
          { 'no-animation': btnClicked },
          { 'no-animation': isGameOver })}
      >
        <h3 className="falling_word">
          {(word)}
        </h3>
      </div>
      <div className="listWords">
        <button
          onClick={(e) => {
            checkAnswer(arrOfWords[0], rightAnswer);
            refreshWordsOnClick();
          }}
          type="button"
          className={classNames(
            { 'wrong': btnClicked && arrOfWords[0] !== rightAnswer },
            { 'right': btnClicked && arrOfWords[0] === rightAnswer },
          )}
        >
          {(arrOfWords[0])}
        </button>
        <button
          onClick={(e) => {
            checkAnswer(arrOfWords[1], rightAnswer);
            refreshWordsOnClick();
          }}
          type="button"
          className={classNames(
            { 'wrong': btnClicked && arrOfWords[1] !== rightAnswer },
            { 'right': btnClicked && arrOfWords[1] === rightAnswer },
          )}
        >
          {(arrOfWords[1])}
        </button>
        <button
          onClick={() => {
            checkAnswer(arrOfWords[2], rightAnswer);
            refreshWordsOnClick();
          }}
          type="button"
          className={classNames(
            { 'wrong': btnClicked && arrOfWords[2] !== rightAnswer },
            { 'right': btnClicked && arrOfWords[2] === rightAnswer },
          )}
        >
          {(arrOfWords[2])}
        </button>
        <button
          onClick={() => {
            checkAnswer(arrOfWords[3], rightAnswer);
            refreshWordsOnClick();
          }}
          type="button"
          className={classNames(
            { 'wrong': btnClicked && arrOfWords[3] !== rightAnswer },
            { 'right': btnClicked && arrOfWords[3] === rightAnswer },
          )}
        >
          {(arrOfWords[3])}
        </button>
      </div>

      <img
        className={classNames('crystall', {})}
        src="/assets/images/savannah/crystall_2.svg"
        alt="violet crystall"
        style={{ transform: `scale(${scaleSize})` }}
      />
    </GameWrapper>
  );
}

// todo
// слово когда упало не исчезает, а обновляется и становится новым
// не переходит со стартового экрана в игру по кнопке
// забирать статистику надо из выученных слов
// вкл/выкл звук не работает
