import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

import PropTypes, { func } from 'prop-types';
import SavannahWrapper from './SavannahWrapper';
import dictionary from '../Dictionary/Dictionary';
import { getRandomNumber, shuffle } from '../Helpers/Helpers';

const classNames = require('classnames');

export default function Savannah() {
  const wordNum = getRandomNumber();

  const [word] = useState(dictionary[wordNum].word);
  const [rightAnswer] = useState(dictionary[wordNum].translate);

  const [translation1] = useState(dictionary[getRandomNumber()].translate);
  const [translation2] = useState(dictionary[getRandomNumber()].translate);
  const [translation3] = useState(dictionary[getRandomNumber()].translate);

  const [answer, setAnswer] = useState(false);

  const [color, setColor] = useState('white');

  const arrofNums = [rightAnswer, translation1, translation2, translation3];

  const [arrOfWords] = useState(shuffle(arrofNums));

  console.log(word, rightAnswer, arrofNums);

  function findMatches(translation, wordItem) {
    dictionary.filter((item) => {
      if (item.translate === translation && item.word === wordItem) {
        setAnswer(true);
        console.log('right', item.translate, item.word);
      }
    });
  }

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
          onClick={(e) => {
            findMatches(arrOfWords[0], word);
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
          onClick={(e) => {
            findMatches(arrOfWords[1], word);
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
          onClick={() => { findMatches(arrOfWords[2], word); }}
          type="button"
          className={classNames({
            'wrong': answer
              && arrOfWords[3] !== rightAnswer,
          })}
        >
          {(arrOfWords[2])}
        </button>
        <button
          onClick={() => { findMatches(arrOfWords[3], word); }}
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
