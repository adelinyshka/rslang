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

export const setSoundStatus = (statusBool) => ({
  type: 'SOUND_STATUS',
  soundStatus: statusBool,
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

export const setScore = (score) => ({
  type: 'SET_SCORE',
  score,
});

export const setMarks = (num) => ({
  type: 'SET_MARKS',
  marks: num,
});

export const setTargets = (num) => ({
  type: 'SET_TARGETS',
  targets: num,
});

export const setRate = (num) => ({
  type: 'SET_RATE',
  rate: num,
});

const INITIAL_STATE = {
  initGame: false,
  startGame: false,
  overGame: false,
  soundStatus: true,
  score: 0,
  words: {},
  results: [],
  level: 0,
  marks: ['empty', 'empty', 'empty'],
  targets: ['empty', 'empty', 'empty'],
  rate: 1,
};

const sprintReducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    ...payload
  } = action;

  switch (type) {
    case 'INIT_GAME':
    case 'START_GAME':
    case 'SOUND_STATUS':
    case 'SET_RESULTS':
    case 'OVER_GAME':
    case 'SET_WORDS':
    case 'SET_LEVEL':
    case 'SET_SCORE':
    case 'SET_MARKS':
    case 'SET_TARGETS':
    case 'SET_RATE':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default sprintReducer;
