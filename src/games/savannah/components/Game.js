import React, {
  useState, useCallback, useEffect, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameWrapper from './GameWrapper';
import { getRandomNumber, shuffle } from './Helpers';
import Lives from './Lives';
// import { Rules, Exit } from './Modal';
import SoundSwitcher from '../../../common/components/SoundSwitcher';
import useAPI, { fetchJSON } from '../../../common/utils/index';
import Results from './Results';
import { setStatusGame } from '../redux';
import Rules from '../../../common/components/Modals/Rules';
import Exit from '../../../common/components/Modals/Exit';
import { tokenSelector, userIdSelector } from '../../../auth/redux/selectors';

const classNames = require('classnames');

const fetchOptions = {
  method: 'GET',
};

const baseStatistic = {
  'learnedWords': 0,
  'optional': {
    'savannah': {
    },
  },
};

let counterCrystalSize = 0.7;
const audioRight = new Audio('/assets/audio/right.mp3');
const audioWrong = new Audio('/assets/audio/wrong.mp3');

export default function Game() {
  const dispatch = useDispatch();
  const userId = useSelector(userIdSelector);
  const token = useSelector(tokenSelector);

  const [answer, setAnswer] = useState('');
  const [arrayWordsWithStatistics, setArrayWordsWithStatistics] = useState([]);
  const [arrOfWords, setArrOfWords] = useState([]);
  const [btnClicked, setBtnClicked] = useState(false);
  const [gettingWords, setGettingWords] = useState(true);
  const [group, setGroup] = useState(1);
  const [isExit, setIsExit] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isRules, setIsRules] = useState(false);
  const [livesCount, setLivesCount] = useState(5);
  const [numRightAnswers, setNumRightAnswers] = useState(0);
  const [numWrongAnswers, setNumWrongAnswers] = useState(0);
  const [page, setPage] = useState(1);
  const [scaleSize, setScaleSize] = useState(counterCrystalSize);
  const [soundOn, setSoundOn] = useState(true);
  const [word, setWord] = useState('');
  const [wordTranslation, setWordTranslation] = useState('');
  const [wordID, setWordID] = useState('');
  const [wordAudio, setWordAudio] = useState('');
  const [wordTranscription, setWordTranscription] = useState('');
  const [wordCounter, setWordCounter] = useState(29);
  const [words, setWords] = useState([]);

  const userWordsURL = useMemo(
    () => `words?page=${page}&group=${group}`, [page, group],
  );

  const action = useCallback((wordsFromApi) => setWords(wordsFromApi), []);
  const wordsUseApi = useAPI(userWordsURL, fetchOptions, action);

  const gameOverHandler = useCallback(() => {
    setIsGameOver(true);
    setWord(' ');
    setGettingWords(false);
    setArrOfWords([]);
    setLivesCount(0);

    const link = `users/${userId}/statistics`;
    const date = new Date(Date.now());
    const dateString = date.toLocaleDateString('en-Us');
    const getFetchOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const promise = fetchJSON(link, getFetchOptions);
    promise
      .then(({ id, ...stats }) => {
        let gameStatistics = {};
        const optionals = stats.optional;

        if (stats.optional.savannah) {
          gameStatistics = { ...stats.optional.savannah };
        }

        if (gameStatistics[dateString]) {
          gameStatistics[dateString] = {
            'timesPlayed': gameStatistics[dateString].timesPlayed + 1,
            'result': gameStatistics[dateString].result + numRightAnswers,
          };
        } else {
          gameStatistics[dateString] = {
            'timesPlayed': 1,
            'result': numRightAnswers,
          };
        }

        const currentStatistics = {
          ...stats,
          optional: {
            ...optionals,
            savannah: {
              ...gameStatistics,
            },
          },
        };
        console.log(currentStatistics);
        return currentStatistics;
      })
      .then((currentStatistics) => {
        const sendOptions = {
          ...getFetchOptions,
          method: 'PUT',
          body: JSON.stringify(currentStatistics),
        };
        fetchJSON(link, sendOptions);
      })
      .catch(() => {
        const currentStatistics = {
          ...baseStatistic,
        };

        currentStatistics.optional.savannah[dateString] = {
          'timesPlayed': 1,
          'result': numRightAnswers,
        };

        const sendOptions = {
          ...getFetchOptions,
          method: 'PUT',
          body: JSON.stringify(currentStatistics),
        };

        fetchJSON(link, sendOptions);
      });
  }, [numRightAnswers, token, userId]);

  useEffect(() => {
    if (gettingWords && livesCount && wordCounter && wordsUseApi) {
      wordsUseApi.length = 10;
      const randomNumber = getRandomNumber();
      const newWordTranslation = wordsUseApi[randomNumber].wordTranslate;

      setWord(wordsUseApi[randomNumber].word);
      setWordID(wordsUseApi[randomNumber].id);
      setWordAudio(wordsUseApi[randomNumber].audio);
      setWordTranscription(wordsUseApi[randomNumber].transcription);
      setWordTranslation(newWordTranslation);

      const arrOfTranslations = [];
      arrOfTranslations.push(newWordTranslation);

      while (arrOfTranslations.length < 4) {
        const translation = wordsUseApi[getRandomNumber()].wordTranslate;
        if (!arrOfTranslations.includes(translation)) {
          arrOfTranslations.push(translation);
        }
      }

      const shuffledTranslations = shuffle(arrOfTranslations);
      setArrOfWords(shuffledTranslations);
      setGettingWords(false);
    }

    if (!wordCounter) {
      gameOverHandler();
    }
    return () => {
      setGettingWords(false);
    };
  }, [wordsUseApi, gettingWords, livesCount, wordCounter]);

  const playSound = useCallback((isAnswerRight) => {
    if (soundOn) {
      if (isAnswerRight) audioRight.play();
      else audioWrong.play();
    }
  }, [soundOn]);

  const onExit = useCallback(() => {
    dispatch(setStatusGame(false));
    setIsExit(false);
  }, [dispatch]);

  function updateArrayWordsForStatistics(isCorrect) {
    const rerenderStats = arrayWordsWithStatistics;
    rerenderStats.push({
      'word': word,
      'id': wordID,
      'audio': wordAudio,
      'transcription': wordTranscription,
      'translation': wordTranslation,
      'isCorrect': isCorrect,
    });
    setArrayWordsWithStatistics(rerenderStats);
  }

  function checkAnswer(wordActive, answerActive) {
    const correct = wordActive === answerActive;
    updateArrayWordsForStatistics(correct);
    setAnswer(correct);
    setBtnClicked(correct);
    setWordCounter(wordCounter - 1);
    playSound(correct);
    setPage(page + 1);

    if (correct) {
      setScaleSize(counterCrystalSize += 0.02);
      setNumRightAnswers(numRightAnswers + 1);
    } else {
      setLivesCount(livesCount - 1);
      setNumWrongAnswers(numWrongAnswers + 1);
    }
  }

  const refreshWordsOnClick = useCallback(() => {
    setTimeout(() => {
      setGettingWords(true);
      setAnswer(false);
      setBtnClicked(false);
    }, 500);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (livesCount && !btnClicked) {
        setGettingWords(true);
        setAnswer(false);
        setLivesCount(livesCount - 1);
        playSound(false);
        setPage(page + 1);
        updateArrayWordsForStatistics(false);
      }
    }, 4650);

    return () => {
      clearTimeout(timer);
    };
  }, [livesCount, answer, btnClicked]);

  return (
    <GameWrapper>
      {isGameOver ? (
        <Results
          arrayWithStatistics={arrayWordsWithStatistics}
          numOfRightAnswers={numRightAnswers}
          numOfWrongAnswers={numWrongAnswers}
          toNewGame={onExit}
        />
      )
        : false}
      {/* {isExit ? ( */}
      {/*  <Exit */}
      {/*    onCancel={() => setIsExit(false)} */}
      {/*    onExit={onExit} */}
      {/*  /> */}
      {/* ) : false} */}
      {/* {isRules ? ( */}
      {/*  <Rules */}
      {/*    onRules={() => setIsRules(false)} */}
      {/*  /> */}
      {/* ) : false} */}
      <img
        className="tree-wave"
        src="/assets/images/savannah/tree_waved.svg"
        alt="tree waved"
      />
      <img
        className="tree-tall"
        src="/assets/images/savannah/tree_tall.svg"
        alt="tree tall"
      />
      <SoundSwitcher onClick={() => setSoundOn()} />
      <Rules rules="Выберите перевод из 4 вариантов до того
                как падающее слово достигнет кристалла"
      />
      <div className="cross">
        <Exit />
      </div>
      <Lives
        livesCount={livesCount}
        leftLifesHandler={gameOverHandler}
        src="/assets/images/savannah/heart_full.svg"
      />
      {
        isGameOver
          ? <h2 style={{ textAlign: 'center', color: 'red' }}>Game Over</h2>
          : ''
      }
      <div
        className={classNames('wrapper_falling',
          { 'animation': !btnClicked },
          { 'no-animation': btnClicked },
          { 'no-animation': isGameOver })}
      >
        <h3 className="falling_word">
          {(word)}
        </h3>
      </div>
      <div className="listWords">
        <button
          onClick={(e) => {
            checkAnswer(arrOfWords[0], wordTranslation);
            refreshWordsOnClick();
          }}
          type="button"
          className={classNames(
            { 'wrong': btnClicked && arrOfWords[0] !== wordTranslation },
            { 'right': btnClicked && arrOfWords[0] === wordTranslation },
          )}
        >
          {(arrOfWords[0])}
        </button>
        <button
          onClick={(e) => {
            checkAnswer(arrOfWords[1], wordTranslation);
            refreshWordsOnClick();
          }}
          type="button"
          className={classNames(
            { 'wrong': btnClicked && arrOfWords[1] !== wordTranslation },
            { 'right': btnClicked && arrOfWords[1] === wordTranslation },
          )}
        >
          {(arrOfWords[1])}
        </button>
        <button
          onClick={() => {
            checkAnswer(arrOfWords[2], wordTranslation);
            refreshWordsOnClick();
          }}
          type="button"
          className={classNames(
            { 'wrong': btnClicked && arrOfWords[2] !== wordTranslation },
            { 'right': btnClicked && arrOfWords[2] === wordTranslation },
          )}
        >
          {(arrOfWords[2])}
        </button>
        <button
          onClick={() => {
            checkAnswer(arrOfWords[3], wordTranslation);
            refreshWordsOnClick();
          }}
          type="button"
          className={classNames(
            { 'wrong': btnClicked && arrOfWords[3] !== wordTranslation },
            { 'right': btnClicked && arrOfWords[3] === wordTranslation },
          )}
        >
          {(arrOfWords[3])}
        </button>
      </div>

      <img
        className={classNames('crystal', {
          'animation-for-crystal ': answer,
          'animation-for-crystal-wrong': !answer,
        })}
        src="/assets/images/savannah/crystal.svg"
        alt="violet crystal"
        style={{ transform: `scale(${scaleSize})` }}
      />
    </GameWrapper>
  );
}
