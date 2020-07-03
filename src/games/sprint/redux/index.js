export const initGame = () => ({
  type: 'INIT_GAME',
  initGame: true,
});

export const startGame = () => ({
  type: 'START_GAME',
  startGame: true,
});

export const overGame = () => ({
  type: 'OVER_GAME',
  overGame: true,
});

export const setWords = (gettingWords) => ({
  type: 'SET_WORDS',
  words: gettingWords,
});

export const setResult = (gettingResults) => ({
  type: 'SET_RESULTS',
  results: gettingResults,
});

export const setLevel = (level) => ({
  type: 'SET_LEVEL',
  level,
});

const INITIAL_STATE = {
  initGame: false,
  startGame: false,
  overGame: false,
  words: {},
  results: [],
  level: 0,
};

const sprintReducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    ...payload
  } = action;

  switch (type) {
    case 'INIT_GAME':
    case 'START_GAME':
    case 'SET_RESULTS':
    case 'OVER_GAME':
    case 'SET_WORDS':
    case 'SET_LEVEL':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default sprintReducer;
