import React, { useCallback } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import LevelSwitcher from '../../../common/components/LevelSwitcher';
import BlockWords from './BlockWords';
import getWords from '../utils/index';
import StyleGame from './style.Game';

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
          dispatch(setTranslateActiveWord(''));
        });
      }
    });
  }, [dispatch]);

  const changeActiveLevel = useCallback((activeLevelProps, levelProps) => {
    if (activeLevelProps !== levelProps) {
      getWords(levelProps).then((gettingWords) => {
        if (gettingWords.length > 1) {
          console.log(gettingWords);
          batch(() => {
            dispatch(setWords(gettingWords));
            dispatch(setLevel(levelProps));
            dispatch(setImage(' '));
            dispatch(setTranslateActiveWord(''));
          });
        }
      });
    }
  }, [activeLevel, dispatch]);

  return (
    <StyleGame>
      <LevelSwitcher
        handlerOnClick={changeActiveLevel}
        activeLevel={activeLevel}
      />
      <figure className="figure">
        <img className="img" src={image} alt={translateActiveWord} />
        <figcaption className="figcaption">
          {translateActiveWord}
        </figcaption>
      </figure>
      <div className="education__block-spoken-words" />
      <BlockWords />
      <div className="education__block-button">
        <button
          type="button"
          className="button__new-words"
          onClick={() => getNewWords(activeLevel)}
        >
          New words
        </button>
        <button
          type="button"
          className="button__speak-please"
        >
          Speak please
        </button>
        <button type="button" className="button__results">Results</button>
      </div>
    </StyleGame>
  );
}

export default Game;
