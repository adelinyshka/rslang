import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
} from 'react';

import { useSelector, useDispatch, batch } from 'react-redux';
import SpeechRecognition from 'react-speech-recognition';
import PropTypes, { number } from 'prop-types';

import StyleGame from './style.Game';

import LevelSwitcher from '../../../common/components/LevelSwitcher';
import BlockWords from './BlockWords';
import Results from './Results';
import Rules from './Rules';
import Exit from './Exit';

import useAPI from '../../../common/utils/index';

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
  imageSelector,
  translateActiveWordSelector,
  levelSelector,
  speechActiveWordSelector,
  speechWordsSelector,
} from '../redux/selectors';

import { userIdSelector } from '../../../auth/redux/selectors';

const baseStatistic = {
  'learnedWords': 0,
  'optional': {
    'cards': {
    },
    'speakit': {
    },
    'audiocall': {
    },
    'memory': {
    },
    'savannah': {
    },
    'sprint': {
    },
    'puzzle': {
    },
  },
};

const imgMicro = '/assets/images/speakit/microphone.svg';

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

const fetchOptionsGet = {
  method: 'GET',
};

const pagesCount = 30;

const randomPage = () => Math.ceil(pagesCount * Math.random());

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
  const userId = useSelector(userIdSelector);

  const [modalResult, setModalResult] = useState(false);
  const [modalExit, setModalExit] = useState(false);
  const [modalRules, setModalRules] = useState(false);
  const [wordsPage, setWordsPage] = useState(randomPage());
  const [statistics, setStatistics] = useState({});
  const [urlSendStatistic, setUrlSendStatistic] = useState('');
  const [urlGetStatistic, setUrlGetStatistic] = useState(`users/${userId}/statistics`);
  const [sendFetchOption, setSendFetchOption] = useState('');

  const changeActiveLevel = useCallback((levelProps) => {
    if (activeLevel !== levelProps) {
      setWordsPage(randomPage());
      batch(() => {
        dispatch(setLevel(levelProps));
        dispatch(setImage('/assets/images/speakit/base-game-image.png'));
        dispatch(setTranslateActiveWord(''));
        dispatch(setSpeechActiveWord(''));
        dispatch(setSpeechWords([]));
      });
    }
  }, [dispatch, activeLevel]);

  const getNewWords = useCallback((currentLevel) => {
    setWordsPage(randomPage());
    batch(() => {
      dispatch(setImage('/assets/images/speakit/base-game-image.png'));
      dispatch(setTranslateActiveWord(''));
      dispatch(setSpeechActiveWord(''));
      dispatch(setSpeechWords([]));
    });
    setModalResult(false);
  }, [dispatch]);

  const changeStatusGame = useCallback(() => {
    if (statusGame === 'no-speach') {
      batch(() => {
        dispatch(setStatusGame('speach'));
        dispatch(setImage('/assets/images/speakit/base-game-image.png'));
        dispatch(setTranslateActiveWord(''));
        dispatch(setActiveWord(''));
        dispatch(setTranslateActiveWord(''));
        dispatch(setSpeechActiveWord(''));
      });
    } else {
      batch(() => {
        dispatch(setStatusGame('no-speach'));
        dispatch(setImage('/assets/images/speakit/base-game-image.png'));
        dispatch(setTranslateActiveWord(''));
        dispatch(setSpeechActiveWord(''));
      });
    }
  }, [dispatch, statusGame]);

  const exitGame = useCallback(() => {
    setModalExit(false);
    batch(() => {
      dispatch(setStatusGame(''));
      dispatch(setWords([]));
      dispatch(setLevel(0));
      dispatch(setImage('/assets/images/speakit/base-game-image.png'));
      dispatch(setTranslateActiveWord(''));
      dispatch(setSpeechActiveWord(''));
      dispatch(setSpeechWords([]));
      dispatch(setActiveWord(''));
    });
  }, [dispatch]);

  const completeGame = useCallback(() => {
    let currentStatistics = {};
    let gameStatistics = {};
    setModalResult(true);
    setUrlGetStatistic('');
    const date = new Date(Date.now());
    const dateString = date.toLocaleDateString('en-Us');
    const optionals = statistics.optional;

    if (optionals && optionals.speakit) {
      gameStatistics = {
        ...statistics.optional.speakit,
      };
    } else {
      gameStatistics[dateString] = {
        'timesPlayed': 0,
        'result': 0,
      };
    }

    if (gameStatistics[dateString]) {
      gameStatistics[dateString] = {
        'timesPlayed': gameStatistics[dateString].timesPlayed + 1,
        'result': gameStatistics[dateString].result + 10,
      };
    } else {
      gameStatistics[dateString] = {
        'timesPlayed': 1,
        'result': 10,
      };
    }

    if (optionals) {
      currentStatistics = {
        ...statistics,
        optional: {
          ...optionals,
          speakit: {
            ...gameStatistics,
          },
        },
      };
    } else {
      currentStatistics = {
        ...baseStatistic,
        optional: {
          ...baseStatistic.optional,
          speakit: {
            ...gameStatistics,
          },
        },
      };
    }

    const sendOptions = {
      method: 'PUT',
      body: JSON.stringify(currentStatistics),
    };

    setSendFetchOption(sendOptions);
    setUrlSendStatistic(`users/${userId}/statistics`);
    setUrlGetStatistic(`users/${userId}/statistics`);
    setUrlSendStatistic('');
  }, [statistics, userId]);

  useEffect(() => {
    recognition.lang = 'en-US';
    if (statusGame === 'speach' && !listening) {
      let trueSpeech = false;
      let img = '';
      words.forEach(({ word, image: wordImage }) => {
        if (!trueSpeech) {
          trueSpeech = word.toLocaleLowerCase()
            === transcript.toLocaleLowerCase();
          img = trueSpeech ? wordImage : '';
        }
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
        console.log(speechWords.length);
        if (speechWords.length === 0) completeGame();
      } else {
        dispatch(setSpeechActiveWord(transcript));
        dispatch(setImage('/assets/images/speakit/base-game-image.png'));
      }
      startListening();
    }
  }, [dispatch,
    statusGame,
    listening,
    transcript,
    startListening,
    words,
    image,
    speechWords,
    recognition.lang,
    completeGame]);

  const setGettingWords = useCallback((gettingWord) => {
    dispatch(setWords(gettingWord));
  }, [dispatch]);

  const userWordsURL = useMemo(() => 'words?'
    + `page=${wordsPage}&group=${activeLevel}&wordsPerExampleSentenceLTE=99`
    + '&wordsPerPage=10', [activeLevel, wordsPage]);

  const getStatisticURL = useMemo(() => urlGetStatistic, [urlGetStatistic]);
  const sendStatisticURL = useMemo(() => urlSendStatistic, [urlSendStatistic]);

  const setGettingStatistic = useCallback((gettingStatistic) => {
    console.log(gettingStatistic);
    setStatistics(gettingStatistic);
  }, []);

  console.log(statistics);

  useAPI(userWordsURL, fetchOptionsGet, setGettingWords);
  useAPI(getStatisticURL, fetchOptionsGet, setGettingStatistic);
  useAPI(sendStatisticURL, sendFetchOption);

  if (!browserSupportsSpeechRecognition && statusGame === 'speach') {
    setStatusGame('no-speach');
  }

  return (
    <StyleGame>
      {modalResult
        ? (
          <Results
            setModalResult={() => setModalResult(false)}
            getNewWords={() => getNewWords(activeLevel)}
          />
        )
        : false}
      {modalExit
        ? (
          <Exit
            setModalExit={() => setModalExit(false)}
            exitGame={exitGame}
          />
        )
        : false}
      {modalRules
        ? (
          <Rules
            setModalRules={() => setModalRules(false)}
          />
        )
        : false}
      <LevelSwitcher
        changeActiveLevel={changeActiveLevel}
      />
      <div
        className="container__rules"
        onClick={() => setModalRules(true)}
      >
        <img
          src="./../assets/images/question.svg"
          alt="question"
        />
      </div>
      <div
        className="container__exit"
        onClick={() => setModalExit(true)}
      >
        <div className="cross" />
      </div>
      <figure className="figure">
        <img className="imgFigure" src={image} alt={translateActiveWord} />
        <figcaption className="figcaption">
          {statusGame === 'speach'
            ? <img className="microphone" src={imgMicro} alt="Microphone" />
            : false}
          {statusGame === 'speach' ? speechActiveWord : translateActiveWord}
        </figcaption>
      </figure>
      <BlockWords />
      <div className="wrapper-btn">
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
          onClick={() => setModalResult(true)}
        >
          Results
        </button>
      </div>
    </StyleGame>
  );
};

Game.propTypes = propTypes;

export default SpeechRecognition(option)(Game);
