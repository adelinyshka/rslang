import React, { useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import action from '../../redux/actionsSpeakit';
import style from '../../style.module.css';

const BlockWords = () => {
  const dispatch = useDispatch();
  const activeWord = useSelector((state) => state.speakit.activeWord);
  const words = useSelector((state) => state.speakit.words);

  const activateWord = (event) => {
    dispatch(action.setActiveWord(event.currentTarget.id));
    event.currentTarget.children[2].play();
  };

  console.log(activeWord);

  return (
  <div>
    {words.map(({ word, transcription, audio }) => (
      <div
        id={word}
        key={word}
        onClick={(event) => activateWord(event)}
        className={`${activeWord === word ? style.blockActiveWord : ''}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          style={{
            width: '25px',
            height: '25px',
          }}
        >
          <path
            fill="currentColor"
            d="M15.788 13.007a3 3 0 110 5.985c.571 3.312 2.064 5.675
              3.815 5.675 2.244 0 4.064-3.88 4.064-8.667
              0-4.786-1.82-8.667-4.064-8.667-1.751 0-3.244 2.363-3.815
              5.674zM19 26c-3.314 0-12-4.144-12-10S15.686 6 19 6s6 4.477
              6 10-2.686 10-6 10z"
            fillRule="evenodd"
          />
        </svg>
        <div>
          <p>{word}</p>
          <p>{transcription}</p>
        </div>
        <audio src={`https://raw.githubusercontent.com/irinainina/rslang-data/master/${audio}`} preload="true" />
      </div>
    ))
    }
  </div>
  );
};

export default BlockWords;
