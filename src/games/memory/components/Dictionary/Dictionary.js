import React, {
  useState, useCallback, useEffect, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import useAPI from '../../../../common/utils';

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
    }
    return () => {
      setGetNewWords(false);
    };
  }, [wordsUseApi,
    words,
    getNewWords,
    setEnglishWords,
    setRussianWords,
    setDictionary]);

  return (
    <div></div>
  );
};

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
  setDictionary: () => { },
  setRussianWords: () => { },
  setEnglishWords: () => { },
};

export default Dictionary;
