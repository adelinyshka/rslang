/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, {
  useState,
  useCallback,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Audiocall.module.css';
import useApi, { fetchJSON } from '../../../common/utils';
import Results from './Results';
import { tokenSelector, userIdSelector } from '../../../auth/redux/selectors';

const fetchOptions = {
  method: 'GET',
};

const audioPath = 'https://raw.githubusercontent.com/'
  + 'alekchaik/rslang-data/master/';

const audioRight = new Audio('/assets/audio/right.mp3');
const audioWrong = new Audio('/assets/audio/wrong.mp3');

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getEndpointUrl = (level, page) => `words?group=${level}&page=${page}`;

const baseStatistic = {
  'learnedWords': 0,
  'optional': {
    'audiocall': {
    },
  },
};

export default function Game({ callback, level }) {
  const userId = useSelector(userIdSelector);
  const token = useSelector(tokenSelector);
  const [arrayWordsWithStatistics, setArrayWordsWithStatistics] = useState([]);
  const [numRightAnswers, setNumRightAnswers] = useState(0);
  const [numWrongAnswers, setNumWrongAnswers] = useState(0);
  const [sumOfWords, setSumOfWords] = useState(10);

  const [IsGameOver, setGameOver] = useState(false);
  const [hint, setHint] = useState(true);
  const [warn, setWarn] = useState(true);
  const [words, setWords] = useState(null);
  const [resultWord, setResultWord] = useState(null);
  const [shouldSoundBePlayed, setShouldSoundBePlayed] = useState(true);
  const [isWordChosen, setIsWordChosen] = useState(false);
  const [endpointUrl, setEndpointUrl] = useState(
    getEndpointUrl(level, 1),
  );
  const [srcImage, setSrcImage] = useState('');
  const changeVisible = () => {
    setWarn(!warn);
  };

  const history = useHistory();

  const action = useCallback((result) => {
    const firstRandomWords = shuffle(result).slice(0, 5);
    const resultOneWord = firstRandomWords[getRandomInt(5)];
    setResultWord(resultOneWord);
    setWords(firstRandomWords);
    setIsWordChosen(false);
    setShouldSoundBePlayed(true);
  }, []);

  const playSound = useCallback(() => {
    if (resultWord) {
      const pronounce = new Audio(`${audioPath}${resultWord.audio}`);
      setSrcImage(`${audioPath}${resultWord.image}`);
      pronounce.volume = 0.05;
      pronounce.play();
    }
  }, [resultWord]);

  if (resultWord && shouldSoundBePlayed) {
    playSound();
    setShouldSoundBePlayed(false);
  }

  useApi(endpointUrl, fetchOptions, action);

  const gameOverHandler = useCallback(() => {
    setGameOver(true);

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

        if (stats.optional.audiocall) {
          gameStatistics = { ...stats.optional.audiocall };
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
            audiocall: {
              ...gameStatistics,
            },
          },
        };
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

        currentStatistics.optional.audiocall[dateString] = {
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

  const changeStatus = useCallback(() => {
    setHint(!hint);
  }, [hint]);

  const updateStats = useCallback((isCorrect) => {
    setArrayWordsWithStatistics([...arrayWordsWithStatistics, {
      'word': resultWord.word,
      'id': resultWord.id,
      'audio': resultWord.audio,
      'transcription': resultWord.transcription,
      'translation': resultWord.wordTranslate,
      'isCorrect': isCorrect,
    }]);
  }, [arrayWordsWithStatistics, resultWord]);

  const chooseWord = (word) => {
    if (word.id === resultWord.id) {
      audioRight.play();
      updateStats(true);
      setNumRightAnswers(numRightAnswers + 1);
    } else {
      audioWrong.play();
      updateStats(false);
      setNumWrongAnswers(numWrongAnswers + 1);
    }
    setSumOfWords(sumOfWords - 1);
    setIsWordChosen(true);
  };

  useEffect(() => {
    if (sumOfWords === 0) {
      gameOverHandler();
    }
  }, [IsGameOver, gameOverHandler, sumOfWords]);

  return (

    <div className={styles.Game}>
      {IsGameOver
        ? (
          <Results
            arrayWithStatistics={arrayWordsWithStatistics}
            numOfRightAnswers={numRightAnswers}
            numOfWrongAnswers={numWrongAnswers}
            toNewGame={() => {}}
          />
        )
        : false}
      <div className={styles.Header}>
        <img
          src="/assets/images/audiocall/Round Rec.png"
          alt="hint"
          onClick={() => changeStatus(false)}
        />
        <img
          src="/assets/images/audiocall/xwhite.png"
          alt="xwhite"
          onClick={() => changeVisible(false)}
        />
      </div>
      <div className={ hint ? styles.Hide : styles.Notification }>
        <img
          src="/assets/images/audiocall/notHint.png"
          alt="hint"
        />
        <p>
          Выберите правильный ответ после проигранного аудио
        </p>
        <button
          onClick={() => changeStatus(true)}
          className={styles.BtnNtfcation}
          type="button"
        >
          Понятно
        </button>
      </div>
      <div className={styles.GamePanel}>
        <img
          onClick={() => playSound()}
          className={isWordChosen ? styles.HidePicture : styles.Volume}
          src="/assets/images/audiocall/volume.png"
          alt="sound"
        />
        <img
          className={isWordChosen ? '' : styles.HidePicture}
          src={srcImage}
          alt="imageAnswer"
        />
        <div className={isWordChosen ? styles.Answer : styles.AnswerHide}>
          <img
            onClick={() => playSound()}
            className={styles.Volume}
            src="/assets/images/audiocall/volume.png"
            alt="sound"
          />
          <p>
            {resultWord && resultWord.word}
          </p>
        </div>
        <div className={styles.Words}>
          {words && words.map((word, index) => (
            <p
              className={
                word.id !== resultWord.id && isWordChosen
                  ? styles.WrongWords : ''
              }
              key={word.id}
              onClick={() => chooseWord(word)}
            >
              {index + 1}
              {' '}
              {word.wordTranslate}
            </p>
          ))}
        </div>
        <button
          onClick={ () => {
            if (isWordChosen) {
              setEndpointUrl(getEndpointUrl(level, getRandomInt(30)));
            } else if (sumOfWords) {
              audioWrong.play();
              setIsWordChosen(true);
              setSumOfWords(sumOfWords - 1);
              updateStats(false);
              setNumWrongAnswers(numWrongAnswers + 1);
            }
            !sumOfWords ? setGameOver(true) : setGameOver(false);
          } }
          className={styles.AnswerBtn}
          type="button"
        >
          {isWordChosen ? 'Дальше' : 'Не знаю'}
        </button>
      </div>
      <div className={ warn ? styles.ShadowHide : styles.Shadow }>
        <div className={styles.Warning}>
          <img
            src="/assets/images/audiocall/attention.png"
            alt="attention"
          />
          <p>
            Если вы выйдете во время игры, то прогресс не сохранится
          </p>
          <div className={styles.Butns}>
            <button
              type="button"
              className={styles.Cancel}
              onClick={() => changeVisible(false)}
            >
              Отменить
            </button>
            <button
              type="button"
              className={styles.Exit}
              onClick={() => history.push('/games')}
            >
              Выйти
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

Game.propTypes = {
  callback: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
};
