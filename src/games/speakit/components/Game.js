import React, { useCallback, useEffect } from 'react';
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
  setStatusGame,
  setActiveWord,
  setSpeechActiveWord,
  setSpeechWords,
} from '../redux/index';

import {
  statusGameSelector,
  wordsSelector,
  activeWordSelector,
  imageSelector,
  translateActiveWordSelector,
  levelSelector,
  speechActiveWordSelector,
  speechWordsSelector,
} from '../redux/selectors';

const imgMicro = './assets/images/speakit/microphone.svg';

const SpeechRecognition = window.SpeechRecognition
  || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.continuous = true;

const Game = () => {
  const dispatch = useDispatch();
  const image = useSelector(imageSelector);
  const activeLevel = useSelector(levelSelector);
  const translateActiveWord = useSelector(translateActiveWordSelector);
  const speechActiveWord = useSelector(speechActiveWordSelector);
  const speechWords = useSelector(speechWordsSelector);
  const statusGame = useSelector(statusGameSelector);
  const words = useSelector(wordsSelector);
  const activeWord = useSelector(activeWordSelector);

  console.log(translateActiveWord);

  const changeActiveLevel = useCallback((levelProps) => {
    if (activeLevel !== levelProps) {
      getWords(levelProps).then((gettingWords) => {
        if (gettingWords.length > 1) {
          console.log(gettingWords);
          batch(() => {
            dispatch(setWords(gettingWords));
            dispatch(setLevel(levelProps));
            dispatch(setImage('./assets/images/speakit/base-game-image.png'));
            dispatch(setTranslateActiveWord(''));
            dispatch(setSpeechActiveWord(''));
          });
        }
      });
    }
  }, [dispatch, activeLevel]);

  const getNewWords = useCallback((currentLevel) => {
    getWords(currentLevel).then((gettingWords) => {
      if (gettingWords.length > 1) {
        console.log(gettingWords);
        batch(() => {
          dispatch(setWords(gettingWords));
          dispatch(setImage('./assets/images/speakit/base-game-image.png'));
          dispatch(setTranslateActiveWord(''));
        });
      }
    });
  }, [dispatch]);

  const changeStatusGame = useCallback(() => {
    if (statusGame === 'no-speach') {
      batch(() => {
        dispatch(setStatusGame('speach'));
        dispatch(setImage('./assets/images/speakit/base-game-image.png'));
        dispatch(setTranslateActiveWord(''));
        dispatch(setActiveWord(''));
      });
      recognition.start();
    } else {
      batch(() => {
        dispatch(setStatusGame('no-speach'));
        dispatch(setImage('./assets/images/speakit/base-game-image.png'));
        dispatch(setTranslateActiveWord(''));
      });
      recognition.stop();
    }
  }, [dispatch, statusGame]);

  recognition.onresult = (event) => {
    const speachWord = event
      .results[event.resultIndex][0]
      .transcript.replace(' ', '');
    let trueSpeech = false;
    let img = '';
    if (speachWord) {
      words.forEach(({ word, image: wordImage }) => {
        if (!trueSpeech) {
          trueSpeech = word === speachWord;
          console.log(word, speachWord, trueSpeech, image);
        }
        img = trueSpeech ? wordImage : '';
        console.log(img);
      });
      if (trueSpeech) {
        let linkImage = `${'https://raw.githubusercontent.com/'
      + 'irinainina/rslang-data/master/'}${img}`;
        const trueSpeechWords = Array.from(speechWords);
        trueSpeechWords.push(speachWord);
        batch(() => {
          dispatch(setSpeechActiveWord(speachWord));
          dispatch(setSpeechWords(trueSpeechWords));
          dispatch(setImage(linkImage));
        });
      } else {
        dispatch(setSpeechActiveWord(speachWord));
        dispatch(setImage('./assets/images/speakit/base-game-image.png'));
      }
    }
  };

  return (
    <StyleGame>
      <LevelSwitcher
        changeActiveLevel={changeActiveLevel}
      />
      <figure className="figure">
        <img className="img" src={image} alt={translateActiveWord} />
        <figcaption className="figcaption">
          {statusGame === 'speach'
            ? <img className="microphone" src={imgMicro} alt="Microphone" />
            : false}
          {statusGame === 'speach' ? speechActiveWord : translateActiveWord}
        </figcaption>
      </figure>
      <div className="education__block-spoken-words" />
      <BlockWords />
      <div className="education__block-button">
        <button
          type="button"
          className="button__restart"
          onClick={() => getNewWords(activeLevel)}
        >
          Restart
        </button>
        <button
          type="button"
          className="button__speak-please"
          onClick={() => changeStatusGame()}
        >
          {statusGame === 'no-speach' ? 'Speak please' : 'Stop speak'}
        </button>
        <button type="button" className="button__results">Results</button>
      </div>
    </StyleGame>
  );
};

export default Game;
