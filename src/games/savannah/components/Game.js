import React, {
  useState, useCallback, useEffect, useMemo, useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameWrapper from './GameWrapper';
import { getRandomNumber, shuffle } from './Helpers';
import Lives from './Lives';
import SoundSwitcher from '../../../common/components/SoundSwitcher';
import useAPI, { fetchJSON } from '../../../common/utils/index';
import Results from './Results';
import { setStatusGame, setLevel } from '../redux';
import Rules from '../../../common/components/Modals/Rules';
import Exit from '../../../common/components/Modals/Exit';
import { tokenSelector, userIdSelector } from '../../../auth/redux/selectors';
import SwitcherLevel from '../../../common/components/LevelSwitcher';
import { levelSelector } from '../redux/selectors';

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
const page = 1;

let counterCrystalSize = 0.7;
const audioRight = new Audio('/assets/audio/right.mp3');
const audioWrong = new Audio('/assets/audio/wrong.mp3');

export default function Game() {
  const activeLevel = useSelector(levelSelector);
  const dispatch = useDispatch();
  const userId = useSelector(userIdSelector);
  const token = useSelector(tokenSelector);

  const [answer, setAnswer] = useState('');
  const [arrayWordsWithStatistics, setArrayWordsWithStatistics] = useState([]);
  const [arrOfWords, setArrOfWords] = useState([]);
  const [btnClicked, setBtnClicked] = useState(false);
  const [gettingWords, setGettingWords] = useState(true);
  const [isExit, setIsExit] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [livesCount, setLivesCount] = useState(5);
  const [numRightAnswers, setNumRightAnswers] = useState(0);
  const [numWrongAnswers, setNumWrongAnswers] = useState(0);
  const [scaleSize, setScaleSize] = useState(counterCrystalSize);
  const [soundOn, setSoundOn] = useState(true);
  const [word, setWord] = useState('');
  const [wordTranslation, setWordTranslation] = useState('');
  const [wordID, setWordID] = useState('');
  const [wordAudio, setWordAudio] = useState('');
  const [wordTranscription, setWordTranscription] = useState('');
  const [wordCounter, setWordCounter] = useState(30);
  const [words, setWords] = useState([]);

  // const parent = document.getElementById('parent');
  // console.log(parent.getBoundingClientRect());

  // const child = document.getElementById('child').getBoundingClientRect();

  // const test = parent.getBoundingClientRect();
  // console.log(test);

  // console.log(child);

  const itemToAnime = useRef();

  const parentToAnime = useRef();

  useEffect(() => {
    const testItem = itemToAnime.current.getBoundingClientRect();
    console.log(testItem);
  }, [itemToAnime]);

  const userWordsURL = useMemo(
    () => `words?page=${page}
    &group=${activeLevel}
    &wordsPerExampleSentenceLTE=99\`
    + '&wordsPerPage=120'`,
    [activeLevel],
  );

  const action = useCallback((wordsFromApi) => setWords(wordsFromApi),
    []);
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
  },
  [numRightAnswers, token, userId]);

  useEffect(() => {
    if (gettingWords && livesCount && wordCounter && wordsUseApi) {
      const randomNumberOne = getRandomNumber();
      const randomNumberTwo = getRandomNumber();

      const searchItemID = words[randomNumberOne].id;
      const wordInArrID = arrayWordsWithStatistics
        .find((wordSearch) => wordSearch.id === searchItemID);

      if (wordInArrID) {
        const newWordTranslation = words[randomNumberTwo].wordTranslate;

        setWord(words[randomNumberTwo].word);
        setWordID(words[randomNumberTwo].id);
        setWordAudio(words[randomNumberTwo].audio);
        setWordTranscription(words[randomNumberTwo].transcription);
        setWordTranslation(newWordTranslation);

        const arrOfTranslations = [];
        arrOfTranslations.push(newWordTranslation);

        while (arrOfTranslations.length < 4) {
          const translation = words[getRandomNumber()].wordTranslate;
          if (!arrOfTranslations.includes(translation)) {
            arrOfTranslations.push(translation);
          }
        }

        const shuffledTranslations = shuffle(arrOfTranslations);
        setArrOfWords(shuffledTranslations);
        setGettingWords(false);
      } else {
        const newWordTranslation = words[randomNumberOne].wordTranslate;
        setWord(words[randomNumberOne].word);
        setWordID(words[randomNumberOne].id);
        setWordAudio(words[randomNumberOne].audio);
        setWordTranscription(words[randomNumberOne].transcription);
        setWordTranslation(newWordTranslation);

        const arrOfTranslations = [];
        arrOfTranslations.push(newWordTranslation);

        while (arrOfTranslations.length < 4) {
          const translation = words[getRandomNumber()].wordTranslate;
          if (!arrOfTranslations.includes(translation)) {
            arrOfTranslations.push(translation);
          }
        }

        const shuffledTranslations = shuffle(arrOfTranslations);
        setArrOfWords(shuffledTranslations);
        setGettingWords(false);
      }
    }

    if (!wordCounter) {
      gameOverHandler();
    }
    return () => {
      setGettingWords(false);
    };
  }, [words, gettingWords, livesCount, wordCounter]);

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

  const updateStats = useCallback((isCorrect) => {
    setArrayWordsWithStatistics([...arrayWordsWithStatistics, {
      'word': word,
      'id': wordID,
      'audio': wordAudio,
      'transcription': wordTranscription,
      'translation': wordTranslation,
      'isCorrect': isCorrect,
    }]);
  }, [arrayWordsWithStatistics]);

  const checkAnswer = useCallback((wordActive, answerActive) => {
    const correct = wordActive === answerActive;
    updateStats(correct);
    setAnswer(correct);
    setBtnClicked(correct);
    setWordCounter(wordCounter - 1);
    playSound(correct);

    if (correct) {
      setScaleSize(counterCrystalSize += 0.02);
      setNumRightAnswers(numRightAnswers + 1);
    } else {
      setLivesCount(livesCount - 1);
      setNumWrongAnswers(numWrongAnswers + 1);
    }
  }, [answer, btnClicked, wordCounter, scaleSize, numRightAnswers]);

  const refreshWordsOnClick = useCallback(() => {
    setTimeout(() => {
      setGettingWords(true);
      setAnswer(false);
      setBtnClicked(false);
    }, 500);
  }, [gettingWords, answer, btnClicked]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (livesCount && !btnClicked) {
        setGettingWords(true);
        setAnswer(false);
        setLivesCount(livesCount - 1);
        playSound(false);
        updateStats(false);
      }
    }, 4650);

    return () => {
      clearTimeout(timer);
    };
  }, [livesCount, answer, btnClicked]);

  const changeActiveLevel = useCallback((levelProps) => {
    if (activeLevel !== levelProps) {
      dispatch(setLevel(levelProps));
    }
  }, [dispatch, activeLevel]);
  return (
    <GameWrapper ref={parentToAnime}>
      <SwitcherLevel
        changeActiveLevel={changeActiveLevel}
        currentLevel={activeLevel + 1}
      />
      {isGameOver ? (
        <Results
          arrayWithStatistics={arrayWordsWithStatistics}
          numOfRightAnswers={numRightAnswers}
          numOfWrongAnswers={numWrongAnswers}
          toNewGame={onExit}
        />
      )
        : false}
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
      <div
        className="cross"
      >
        <Exit onExit={onExit} noWhite={false} />
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
        id="fallingWord"
        ref={itemToAnime}
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
        {
          arrOfWords.map((itemWord) => (
            <button
              key={itemWord}
              onClick={(e) => {
                checkAnswer(itemWord, wordTranslation);
                refreshWordsOnClick();
              }}
              type="button"
              className={classNames(
                { 'wrong': btnClicked && itemWord !== wordTranslation },
                { 'right': btnClicked && itemWord === wordTranslation },
              )}
            >
              {(itemWord)}
            </button>
          ))
        }
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
