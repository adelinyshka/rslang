import React, { useCallback } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import {
  wordsSelector,
  activeWordSelector,
} from '../redux/selectors';
import { translater } from '../utils/index';

import {
  setActiveWord,
  setImage,
  setTranslateActiveWord,
} from '../redux';

import {
  StyleWordsContainer,
  StyleWordBlock,
} from './style.BlockWords.js';

const audioPath = 'https://raw.githubusercontent.com'
  + '/irinainina/rslang-data/master/';

const BlockWords = () => {
  const dispatch = useDispatch();
  const activeWord = useSelector(activeWordSelector);
  const words = useSelector(wordsSelector);
  console.log(words);

  const activateWord = useCallback((word, audio, image) => {
    translater(word).then((result) => {
      console.log(result);
      const [translateWord] = result.text;
      const link = `${'https://raw.githubusercontent.com/'
      + 'irinainina/rslang-data/master/'}${image}`;
      batch(() => {
        dispatch(setActiveWord(word));
        dispatch(setImage(link));
        dispatch(setTranslateActiveWord(translateWord));
      });
      const pronounce = new Audio(`${audioPath}${audio}`);
      pronounce.play();
    });
  }, [dispatch]);

  return (
    <StyleWordsContainer>
      {words.map(({
        word,
        transcription,
        audio,
        image,
      }) => (
        <StyleWordBlock
          id={word}
          key={word}
          onClick={() => activateWord(word, audio, image)}
          active={word === activeWord}
        >
          <img
            src="./assets/images/speakit/audio-icon.svg"
            alt="audio-icon.svg"
          />
          <div className="word_div">
            <p>{word}</p>
            <p>{transcription}</p>
          </div>
        </StyleWordBlock>
      ))}
    </StyleWordsContainer>
  );
};

export default BlockWords;
