export const startGame = () => ({
  type: 'START_GAME',
  stateGame: true,
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

const INITIAL_STATE = {
  stateGame: false,
  words: {},
  level: 1,
  activeWord: 'base_word',
};

const speakitReducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    ...payload
  } = action;

  switch (type) {
    case 'START_GAME':
    case 'SET_WORDS':
    case 'SET_LEVEL':
    case 'SET_ACTIVE_WORD':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default speakitReducer;
