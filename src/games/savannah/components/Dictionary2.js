import { useCallback, useEffect, useState } from 'react';
import { shuffle } from './Helpers';
import fetchJSON from '../../../common/utils/index';
import useAPI from '../../../../common/utils';

const fetchOptions = {
  method: 'GET',
};

function shuffled(array) {
  array.sort(() => Math.random() - 0.5);

  const shuffledArray = JSON.stringify(array);
  return JSON.parse(shuffledArray);
}

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
      // shuffle(wordsUseApi);
      wordsUseApi.length = 10;
      setDictionary(wordsUseApi);
      setEnglishWords(shuffled(wordsUseApi));
      setRussianWords(shuffled(wordsUseApi));
      // setWords(wordsUseApi);
    }
    return () => {
      setGetNewWords(false);
    };
  }, [wordsUseApi, words, getNewWords]);


  Dictionary.propTypes = {
    level: PropTypes.number,
    page: PropTypes.number,
    setDictionary: PropTypes.func,
    setRussianWords: PropTypes.func,
    setEnglishWords: PropTypes.func,
  };

  Dictionary.defaultProps = {
    level: 0,
    page: 0,
    setDictionary: () => {},
    setRussianWords: () => {},
    setEnglishWords: () => {},
  };

