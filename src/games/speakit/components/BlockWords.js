import React, { useCallback } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import {
  wordsSelector,
  activeWordSelector,
  statusGameSelector,
  speechWordsSelector,
} from '../redux/selectors';

import {
  setActiveWord,
  setImage,
  setTranslateActiveWord,
} from '../redux';

import {
  StyleWordsContainer,
  StyleWordBlock,
} from './style.BlockWords';

const audioPath = 'https://raw.githubusercontent.com'
  + '/irinainina/rslang-data/master/';

const BlockWords = () => {
  const dispatch = useDispatch();
  const activeWord = useSelector(activeWordSelector);
  const words = useSelector(wordsSelector);
  const statusGame = useSelector(statusGameSelector);
  const speechWords = useSelector(speechWordsSelector);
  console.log(words, 'blockword');

  const activateWord = useCallback((word, audio, image, wordTranslate) => {
    const link = `${'https://raw.githubusercontent.com/'
      + 'irinainina/rslang-data/master/'}${image}`;
    batch(() => {
      dispatch(setActiveWord(word));
      dispatch(setImage(link));
      dispatch(setTranslateActiveWord(wordTranslate));
    });
    const pronounce = new Audio(`${audioPath}${audio}`);
    pronounce.play();
  }, [dispatch]);

  return (
    <StyleWordsContainer>
      {words.map(({
        word,
        transcription,
        audio,
        image,
        wordTranslate,
      }) => (
        <StyleWordBlock
          id={word}
          key={word}
          onClick={() => (statusGame === 'no-speach'
            ? activateWord(word, audio, image, wordTranslate)
            : false) }
          active={word === activeWord
            || speechWords.find((element) => word === element)}
          statusGame={statusGame}
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
