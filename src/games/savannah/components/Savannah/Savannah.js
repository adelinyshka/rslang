import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SavannahWrapper from './SavannahWrapper';
import dictionary from '../Dictionary/Dictionary';

export default function Savannah() {
  const [word] = useState(dictionary[Math.floor(Math.random() * 10)].word);
  const [translation1] = useState(dictionary[Math.floor(Math.random() * 10)]
    .translate);
  const [translation2] = useState(dictionary[Math.floor(Math.random() * 10)]
    .translate);
  const [translation3] = useState(dictionary[Math.floor(Math.random() * 10)]
    .translate);
  const [translation4] = useState(dictionary[Math.floor(Math.random() * 10)]
    .translate);

  useEffect(() => {

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
      <div className="wrapper_falling">
        <h3 className="falling_word">
          {(word)}
        </h3>
      </div>
      <div className="listWords">
        <button
          onClick={() => {}}
          type="button"
        >
          {(translation1)}
        </button>
        <button
          onClick={() => {}}
          type="button"
        >
          {(translation2)}
        </button>
        <button
          onClick={() => {}}
          type="button"
        >
          {(translation3)}
        </button>
        <button
          onClick={() => {}}
          type="button"
        >
          {(translation4)}
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
