import React, { useCallback } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import LevelSwitcher from '../../../common/components/LevelSwitcher';
import BlockWords from './BlockWords';
import { getWords } from '../utils/index';

import {
  setWords,
  setImage,
  setTranslateActiveWord,
  setLevel,
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
  const activeLevel = useSelector(levelSelector);
  const translateActiveWord = useSelector(translateActiveWordSelector);
  const activeWord = useSelector(activeWordSelector);
  const words = useSelector(wordsSelector);
  const statusGame = useSelector(modeSelector);
  console.log(translateActiveWord);

  const getNewWords = useCallback((currentLevel) => {
    getWords(currentLevel).then((gettingWords) => {
      if (gettingWords.length > 1) {
        console.log(gettingWords);
        batch(() => {
          dispatch(setWords(gettingWords));
          dispatch(setImage(' '));
          dispatch(setTranslateActiveWord(' '));
        });
      }
    });
  }, [dispatch]);

  const changeActiveLevel = useCallback((activeLevelProps, levelProps) => {
    if (activeLevelProps !== levelProps) {
      getWords(levelProps).then((wordsProps) => {
        if (wordsProps.length > 1) {
          console.log(wordsProps);
          batch(() => {
            dispatch(setWords(wordsProps));
            dispatch(setLevel(levelProps));
            dispatch(setImage(' '));
            dispatch(setTranslateActiveWord(' '));
          });
        }
      });
    }
  }, [activeLevel, dispatch]);

  return (
    <div className="wrapper">
      <LevelSwitcher
        handlerOnClick={changeActiveLevel}
        activeLevel={activeLevel}
      />
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
          onClick={() => getNewWords(activeLevel)}
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
