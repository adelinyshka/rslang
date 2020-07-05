import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getRandomNumber, shuffle } from '../Helpers/Helpers';
import dictionary from '../Dictionary/Dictionary';
import SavannahWrapper from './SavannahWrapper';

const classNames = require('classnames');

const randomNumInit = getRandomNumber();
const wordInit = dictionary[randomNumInit].word;
const answerInit = dictionary[randomNumInit].translate;
const arrOfTranslationsInit = [];

arrOfTranslationsInit.push(answerInit);

let counterInit = 0;
while (counterInit < 3) {
  const translationInit = dictionary[getRandomNumber()].translate;
  arrOfTranslationsInit.push(translationInit);
  counterInit += 1;
}
let counterScale = 1;
const arrOfWordsShuffledInit = shuffle(arrOfTranslationsInit);

export default function Savannah() {
  const [word, setWord] = useState(wordInit);
  const [answer, setAnswer] = useState(answerInit);
  const [isRight, setIsRight] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);

  const [scalex, setScalex] = useState(counterScale);

  const [arrOfWords, setArrOfWords] = useState(arrOfWordsShuffledInit);

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
    setTimeout(() => {
      getNewWords();
      setBtnClicked(false);
    }, 500);
  }, [getNewWords]);

  function checkAnswer(wordActive, answerActive) {
    if (wordActive === answerActive) {
      setBtnClicked(true);
      setIsRight(true);
      setScalex(counterScale += 1);
      console.log(counterScale);
      // добавить звук верного ответа
      // увеличить кристалл
    } else {
      setBtnClicked(true);
      // убрать 1 жизнь
      // звук проигрыша
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getNewWords();
    }, 4700);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <SavannahWrapper>
      <Link to="">
        <img
          className="cross"
          src="./../assets/images/savannah/x_white.svg"
          alt="close"
        />
      </Link>
      <div
        className={classNames('wrapper_falling',
          { 'animation': !btnClicked },
          { 'no-animation': btnClicked })}
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
        className={classNames('crystall', {
        })}
        src="./../assets/images/savannah/crystall_2.svg"
        alt="violet crystall"
      />
    </SavannahWrapper>
  );
}

// const Img = styled.img`
//   img.crystall {
//     display: block;
//     position: absolute;
//     bottom: 10%;
//     left: calc(50% - 96px/2);
//
//     &.scale {
//       transform: scale({scalex});
//     }
//   }
// `;
