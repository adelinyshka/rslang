import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import SpeechRecognition from 'react-speech-recognition';
import PropTypes from 'prop-types';

import StyleGame from './style.Game';

import LevelSwitcher from '../../../common/components/LevelSwitcher';
import BlockWords from './BlockWords';
import getWords from '../utils/index';
import Results from './Results';

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

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string.isRequired,
  resetTranscript: PropTypes.func.isRequired,
  startListening: PropTypes.func.isRequired,
  listening: PropTypes.bool.isRequired,
  recognition: PropTypes.object.isRequired,
  browserSupportsSpeechRecognition: PropTypes.bool.isRequired,
};

const option = {
  continuous: false,
};

const Game = ({
  transcript,
  resetTranscript,
  startListening,
  listening,
  browserSupportsSpeechRecognition,
  recognition,
}) => {
  const dispatch = useDispatch();
  const image = useSelector(imageSelector);
  const activeLevel = useSelector(levelSelector);
  const translateActiveWord = useSelector(translateActiveWordSelector);
  const speechActiveWord = useSelector(speechActiveWordSelector);
  const speechWords = useSelector(speechWordsSelector);
  const statusGame = useSelector(statusGameSelector);
  const words = useSelector(wordsSelector);
  const activeWord = useSelector(activeWordSelector);

  const [showResult, setShowResult] = useState(false);

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
            dispatch(setSpeechWords([]));
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
        setShowResult(false);
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
    } else {
      batch(() => {
        dispatch(setStatusGame('no-speach'));
        dispatch(setImage('./assets/images/speakit/base-game-image.png'));
        dispatch(setTranslateActiveWord(''));
      });
    }
  }, [dispatch, statusGame]);

  useEffect(() => {
    recognition.lang = 'en-US';
    if (statusGame === 'speach') {
      if (!listening) {
        let trueSpeech = false;
        let img = '';
        words.forEach(({ word, image: wordImage }) => {
          if (!trueSpeech) {
            trueSpeech = word.toLocaleLowerCase()
              === transcript.toLocaleLowerCase();
            console.log(word, transcript, trueSpeech, image);
            img = trueSpeech ? wordImage : '';
          }
          console.log(img);
        });
        if (trueSpeech) {
          const linkImage = `${'https://raw.githubusercontent.com/'
            + 'alekchaik/rslang-data/master/'}${img}`;
          const trueSpeechWords = [...speechWords, transcript];
          batch(() => {
            dispatch(setSpeechActiveWord(transcript));
            dispatch(setSpeechWords(trueSpeechWords));
            dispatch(setImage(linkImage));
          });
        } else {
          dispatch(setSpeechActiveWord(transcript));
          dispatch(setImage('./assets/images/speakit/base-game-image.png'));
        }
        startListening();
      }
    }
  }, [dispatch,
    statusGame,
    listening,
    transcript,
    startListening,
    words,
    image,
    speechWords,
    recognition.lang]);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    showResult ? (
      <StyleGame>
        <Results />
        <button
          type="button"
          className="button__close-results"
          onClick={() => setShowResult(false)}
        >
          Return
        </button>
        <button
          type="button"
          className="button__new-game"
          onClick={() => getNewWords(activeLevel)}
        >
          New game
        </button>
      </StyleGame>
    )
      : (
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
              onClick={() => dispatch(setSpeechWords([]))}
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
            <button
              type="button"
              className="button__show-results"
              onClick={() => setShowResult(true)}
            >
              Results
            </button>
          </div>
        </StyleGame>
      )
  );
};

Game.propTypes = propTypes;

export default SpeechRecognition(option)(Game);
