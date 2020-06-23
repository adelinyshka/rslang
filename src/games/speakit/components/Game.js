import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SwitcherLevel from './SwitcherLevel';
import BlockWords from './BlockWords';
import { getWords } from '../utils/index';

import {
  setWords,
  setImage,
  setTranslateActiveWord,
} from '../redux/index';

import {
  modeSelector,
  wordsSelector,
  activeWordSelector,
  imageSelector,
  translateActiveWordSelector,
  levelSelector,
} from '../redux/selectors';

function Game() {
  const dispatch = useDispatch();
  const image = useSelector(imageSelector);
  const level = useSelector(levelSelector);
  const translateActiveWord = useSelector(translateActiveWordSelector);
  const activeWord = useSelector(activeWordSelector);
  const words = useSelector(wordsSelector);
  const statusGame = useSelector(modeSelector);
  console.log(translateActiveWord);

  const getNewWords = useCallback((currentLevel) => {
    getWords(currentLevel).then((gettingWords) => {
      if (gettingWords.length > 1) {
        console.log(gettingWords);
        dispatch(setWords(gettingWords));
        dispatch(setImage(' '));
        dispatch(setTranslateActiveWord(' '));
      }
    });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <SwitcherLevel />
      <figure>
        <img src={image} alt={translateActiveWord} />
        <figcaption>
          {translateActiveWord}
        </figcaption>
      </figure>
      <div className="education__block-spoken-words" />
      <BlockWords />
      <div className="education__block-button">
        <button
          type="button"
          className="btn"
          onClick={() => getNewWords(level)}
        >
          New words
        </button>
        <button type="button" className="btn">Speak please</button>
        <button type="button" className="btn">Results</button>
      </div>
    </div>
  );
}

export default Game;
