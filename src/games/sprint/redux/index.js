export const initGame = () => ({
  type: 'INIT_GAME',
  initGame: true,
});

export const startGame = () => ({
  type: 'START_GAME',
  startGame: true,
});

export const setWords = (gettingWords) => ({
  type: 'SET_WORDS',
  words: gettingWords,
});

export const setLevel = (level) => ({
  type: 'SET_LEVEL',
  level,
});

const INITIAL_STATE = {
  initGame: false,
  stateGame: false,
  words: {},
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
