export const setStatusGame = (statusGame) => ({
  type: 'SET_STATUS_GAME',
  statusGame,
});

export const setWords = (gettingWords) => ({
  type: 'SET_WORDS',
  words: gettingWords,
});

export const setLevel = (level) => ({
  type: 'SET_LEVEL',
  level,
});

export const setActiveWord = (activeWord) => ({
  type: 'SET_ACTIVE_WORD',
  activeWord,
});

export const setTranslateActiveWord = (translateActiveWord) => ({
  type: 'SET_TRANSE_ACTIVE_WORD',
  translateActiveWord,
});

export const setImage = (image) => ({
  type: 'SET_IMAGE',
  image,
});

const INITIAL_STATE = {
  statusGame: '',
  words: {},
  level: 0,
  activeWord: 'base_word',
  translateActiveWord: ' ',
  image: '',
};

const memoryReducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    ...payload
  } = action;

  switch (type) {
    case 'SET_STATUS_GAME':
    case 'SET_WORDS':
    case 'SET_LEVEL':
    case 'SET_ACTIVE_WORD':
    case 'SET_IMAGE':
    case 'SET_TRANSLATE_ACTIVE_WORD':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default memoryReducer;
