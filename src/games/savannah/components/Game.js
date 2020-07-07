import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRandomNumber, shuffle } from './Helpers';
import dictionary from './Dictionary';
import GameWrapper from './GameWrapper';
import Lives from './Lives';

const classNames = require('classnames');

const randomNumInit = getRandomNumber();
const wordInit = dictionary[randomNumInit].word;
const answerInit = dictionary[randomNumInit].translate;
const arrOfTranslationsInit = [];

arrOfTranslationsInit.push(answerInit);

let counterCrystalSize = 0.7;

let counterTranslatedWords = 0;
while (counterTranslatedWords < 3) {
  const translationInit = dictionary[getRandomNumber()].translate;
  arrOfTranslationsInit.push(translationInit);
  counterTranslatedWords += 1;
}

const arrOfWordsShuffledInit = shuffle(arrOfTranslationsInit);

export default function Game() {
  const [word, setWord] = useState(wordInit);
  const [answer, setAnswer] = useState(answerInit);
  const [btnClicked, setBtnClicked] = useState(false);
  const [scaleSize, setScaleSize] = useState(counterCrystalSize);
  const [arrOfWords, setArrOfWords] = useState(arrOfWordsShuffledInit);
  const [livesCount, setLivesCount] = useState(5);
  const [wordCounter, setWordCounter] = useState(40);
  console.log(wordCounter);
  const [isGameOver, setIsGameOver] = useState(false);

  const getNewWords = useCallback(() => {
    const randomNumber = getRandomNumber();
    const newWord = dictionary[randomNumber].word;
    const newAnswer = dictionary[randomNumber].translate;
    setWord(newWord);
    setAnswer(newAnswer);
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
  }, [answer]);

  const refreshWordsOnClick = useCallback(() => {
    if (wordCounter <= 1) {
      setIsGameOver(true);
      setWord(' ');
    }
    setTimeout(() => {
      getNewWords();
      setBtnClicked(false);
    }, 1000);
  }, [getNewWords]);

  const audioRight = new Audio('./../assets/audio/right.mp3');
  const audioWrong = new Audio('./../assets/audio/wrong.mp3');

  const playRight = () => {
    audioRight.play();
  };
  const playWrong = () => {
    audioWrong.play();
  };

  function checkAnswer(wordActive, answerActive) {
    if (wordActive === answerActive) {
      setBtnClicked(true);
      setScaleSize(counterCrystalSize += 0.05);
      setWordCounter(wordCounter - 1);
      playRight();
    } else {
      setBtnClicked(true);
      setLivesCount(livesCount - 1);
      setWordCounter(wordCounter - 1);
      playWrong();
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isGameOver) {
        console.log('finish');
        return;
      }
      getNewWords();
    }, 4700);

    return () => {
      clearTimeout(timer);
    };
  });

  const gameOverHandler = useCallback(() => {
    setIsGameOver(true);
    setWord(' ');
  }, []);

  return (
    <GameWrapper>
      <Link to="">
        <img
          className="cross"
          src="./../assets/images/savannah/x_white.svg"
          alt="close"
        />
      </Link>

      <Lives
        livesCount={livesCount}
        leftLifesHandler={gameOverHandler}
        src="./../assets/images/savannah/heart_full.svg"
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
            checkAnswer(arrOfWords[0], answer);
            refreshWordsOnClick();
          }}
          type="button"
          className={classNames(
            { 'wrong': btnClicked && arrOfWords[0] !== answer },
            { 'right': btnClicked && arrOfWords[0] === answer },
          )}
        >
          {(arrOfWords[0])}
        </button>
        <button
          onClick={(e) => {
            checkAnswer(arrOfWords[1], answer);
            refreshWordsOnClick();
          }}
          type="button"
          className={classNames(
            { 'wrong': btnClicked && arrOfWords[1] !== answer },
            { 'right': btnClicked && arrOfWords[1] === answer },
          )}
        >
          {(arrOfWords[1])}
        </button>
        <button
          onClick={() => {
            checkAnswer(arrOfWords[2], answer);
            refreshWordsOnClick();
          }}
          type="button"
          className={classNames(
            { 'wrong': btnClicked && arrOfWords[2] !== answer },
            { 'right': btnClicked && arrOfWords[2] === answer },
          )}
        >
          {(arrOfWords[2])}
        </button>
        <button
          onClick={() => {
            checkAnswer(arrOfWords[3], answer);
            refreshWordsOnClick();
          }}
          type="button"
          className={classNames(
            { 'wrong': btnClicked && arrOfWords[3] !== answer },
            { 'right': btnClicked && arrOfWords[3] === answer },
          )}
        >
          {(arrOfWords[3])}
        </button>
      </div>

      <img
        className={classNames('crystall', {})}
        src="./../assets/images/savannah/crystall_2.svg"
        alt="violet crystall"
        style={{ transform: `scale(${scaleSize})` }}
      />
    </GameWrapper>
  );
}
