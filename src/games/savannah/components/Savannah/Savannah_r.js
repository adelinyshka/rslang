import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PropTypes, { func } from 'prop-types';
import SavannahWrapper from './SavannahWrapper';
import dictionary from '../Dictionary/Dictionary';
import { getRandomNumber, shuffle } from '../Helpers/Helpers';

const classNames = require('classnames');

const wordNumFirst = getRandomNumber();
const wordFirst = dictionary[wordNumFirst].word;
const rightAnswerFirst = dictionary[wordNumFirst].translate;
const arrofNumsFirst = [];

arrofNumsFirst.push(rightAnswerFirst);

let countFirst = 0;
while (countFirst < 3) {
  const gettingWord = dictionary[getRandomNumber()].translate;
  arrofNumsFirst.push(gettingWord);
  countFirst += 1;
}

const arrofNumsFirstShuffl = shuffle(arrofNumsFirst);

export default function Savannah() {
  const [word, setWord] = useState(wordFirst);
  const [rightAnswer, setRightAnswer] = useState(rightAnswerFirst);
  const [answer, setAnswer] = useState(false);
  const [arrOfWords, setArrOfWords] = useState(arrofNumsFirstShuffl);

  const gettingNewWords = useCallback(() => {
    const wordNum = getRandomNumber();
    const getWord = dictionary[wordNum].word;
    const getTranslate = dictionary[wordNum].translate;
    setWord(getWord);
    setRightAnswer(getTranslate);
    const arrofNums = [];
    console.log(wordNum);

    arrofNums.push(getTranslate);

    let count = 0;
    while (count < 3) {
      const gettingWord = dictionary[getRandomNumber()].translate;
      arrofNums.push(gettingWord);
      count += 1;
    }

    const shuffledArr = shuffle(arrofNums);

    setArrOfWords(shuffledArr);
  }, [rightAnswer]);

  console.log(word, rightAnswer, arrOfWords);

  function findMatches(wordActive, answerActive) {
    if (wordActive === answerActive) {
      console.log('right');
      setAnswer(true);
    } else {
      console.log('wrong');
      setAnswer(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      gettingNewWords();
      setAnswer(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  });

  const getingNewWordsOnClick = useCallback(() => {
    setTimeout(() => {
      gettingNewWords();
      setAnswer(false);
    }, 2000);
  }, [gettingNewWords]);

  return (
    <SavannahWrapper>
      <Link to="">
        <img
          className="cross"
          src="./../assets/images/savannah/x_white.svg"
          alt="close"
        />
      </Link>
      <div className="wrapper_falling">
        <h3 className="falling_word">
          {(word)}
        </h3>
      </div>
      <div className="listWords">
        <button
          onClick={() => {
            findMatches(arrOfWords[0], rightAnswer);
            getingNewWordsOnClick();
          }}
          type="button"
          className={classNames({
            'wrong': answer
              && arrOfWords[0] !== rightAnswer,
          })}
        >
          {(arrOfWords[0])}
        </button>
        <button
          onClick={() => {
            findMatches(arrOfWords[1], rightAnswer);
            getingNewWordsOnClick();
          }}
          type="button"
          className={classNames({
            'wrong': answer
              && arrOfWords[1] !== rightAnswer,
          })}
        >
          {(arrOfWords[1])}
        </button>
        <button
          onClick={() => {
            findMatches(arrOfWords[2], rightAnswer);
            getingNewWordsOnClick();
          }}
          type="button"
          className={classNames({
            'wrong': answer
              && arrOfWords[2] !== rightAnswer,
          })}
        >
          {(arrOfWords[2])}
        </button>
        <button
          onClick={() => {
            findMatches(arrOfWords[3], rightAnswer);
            getingNewWordsOnClick();
          }}
          type="button"
          className={classNames({
            'wrong': answer
              && arrOfWords[3] !== rightAnswer,
          })}
        >
          {(arrOfWords[3])}
        </button>
      </div>

      <img
        className={classNames('crystall', {
          'scale': answer,
        })}
        src="./../assets/images/savannah/crystall_2.svg"
        alt="violet crystall"
      />
    </SavannahWrapper>
  );
}
