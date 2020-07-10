import React, {
  useState, useCallback, useEffect, useMemo,
} from 'react';
import useAPI from '../../../common/utils/index';
import style from './Dictionary.module.css';

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);

  const shuffledArray = JSON.stringify(array);
  return JSON.parse(shuffledArray);
}

const fetchOptions = {
  method: 'GET',
};

const Dictionary = ({
  level,
  setDictionary,
  page,
  setRussianWords,
  setEnglishWords,
}) => {
  const [words, setWords] = useState(null);
  const [getNewWords, setGetNewWords] = useState(true);

  const userWordsURL = useMemo(
    () => `words?page=${page}&group=${level}`, [level],
  );

  const action = useCallback((wordsFromApi) => setWords(wordsFromApi), []);
  const wordsUseApi = useAPI(userWordsURL, fetchOptions, action);

  useEffect(() => {
    if (getNewWords && wordsUseApi) {
      shuffle(wordsUseApi);
      wordsUseApi.length = 10;
      setDictionary(wordsUseApi);
      setEnglishWords(shuffle(wordsUseApi));
      setRussianWords(shuffle(wordsUseApi));
      // setWords(wordsUseApi);
    }
    return () => {
      setGetNewWords(false);
    };
  }, [wordsUseApi, words, getNewWords]);

  return (
    <div className={style.lds_roller}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Dictionary;
