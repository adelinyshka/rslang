import React, {
  useState, useCallback, useEffect, useMemo,
} from 'react';
import useAPI from '../../../common/utils/index';
import style from './Dictionary.module.css';

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const fetchOptions = {
  method: 'GET',
};

const Dictionary = ({
  level,
  setDictionary,
  page,
}) => {
  const [words, setWords] = useState(null);
  const [getNewWords, setGetNewWords] = useState(true);

  const userWordsURL = useMemo(
    () => `words?page=${page}&level=${level}`, [level],
  );

  const action = useCallback((wordsFromApi) => setWords(wordsFromApi), [setWords]);
  const wordsUseApi = useAPI(userWordsURL, fetchOptions, action);

  useEffect(() => {
    if (getNewWords && wordsUseApi) {
      shuffle(wordsUseApi);
      wordsUseApi.length = 10;
      setDictionary(wordsUseApi);
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
