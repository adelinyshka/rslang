import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SavannahWrapper from './SavannahWrapper';
import dictionary from '../Dictionary/Dictionary';
import { getRandomNumber, shuffle } from '../Helpers/Helpers';

export default function Savannah() {
  const wordNum = getRandomNumber();

  const [word] = useState(dictionary[wordNum].word);
  const [rightAnswer] = useState(dictionary[wordNum].translate);

  const [translation1] = useState(dictionary[getRandomNumber()].translate);
  const [translation2] = useState(dictionary[getRandomNumber()].translate);
  const [translation3] = useState(dictionary[getRandomNumber()].translate);

  const arrofNums = [rightAnswer, translation1, translation2, translation3];

  shuffle(arrofNums);

  function findMatches(translation, wordItem) {
    dictionary.filter((item) => {
      if (item.translate === translation && item.word === wordItem) {
        console.log('right', item.translate, item.word);
      }
    });
  }

  findMatches(translation1);

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
          onClick={() => { findMatches(arrofNums[0], word); }}
          type="button"
        >
          {(arrofNums[0])}
        </button>
        <button
          onClick={() => { findMatches(arrofNums[1], word); }}
          type="button"
        >
          {(arrofNums[1])}
        </button>
        <button
          onClick={() => { findMatches(arrofNums[2], word); }}
          type="button"
        >
          {(arrofNums[2])}
        </button>
        <button
          onClick={() => { findMatches(arrofNums[3], word); }}
          type="button"
        >
          {(arrofNums[3])}
        </button>
      </div>
      <img
        className="crystall"
        src="./../assets/images/savannah/crystall_2.svg"
        alt="violet crystall"
      />
    </SavannahWrapper>
  );
}
