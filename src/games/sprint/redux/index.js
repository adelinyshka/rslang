const INITIAL_STATE = {
  initGame: false,
  startGame: false,
  overGame: false,
  soundStatus: true,
  learnedWords: false,
  score: 0,
  words: {},
  results: [],
  level: 0,
  marksCombo: 0,
  marks: ['empty', 'empty', 'empty'],
  targets: ['empty', 'empty', 'empty'],
  rate: 1,
};

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

export const setLearnedWords = (statusBool) => ({
  type: 'LEARNED_WORDS',
  learnedWords: statusBool,
});

export const setWords = (gettingWords) => ({
  type: 'SET_WORDS',
  words: gettingWords,
});

export const pushResult = (result) => ({
  type: 'PUSH_RESULT',
  result,
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

export const resetCombo = () => ({
  type: 'RESET_COMBO',
});

export const incCombo = () => ({
  type: 'INC_COMBO',
});

export const setTargets = (num) => ({
  type: 'SET_TARGETS',
  targets: num,
});

export const setRate = (num) => ({
  type: 'SET_RATE',
  rate: num,
});

export const setDefault = () => ({
  type: 'SET_DEFAULT',
});

export const addMark = () => ({
  type: 'ADD_MARK',
});

export const resetMarks = () => ({
  type: 'RESET_MARK',
});

export const addTarget = () => ({
  type: 'ADD_TARGET',
});

export const resetTargets = () => ({
  type: 'RESET_TARGET',
});

const sprintReducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    ...payload
  } = action;

  switch (type) {
    case 'PUSH_RESULT':
      return {
        ...state,
        results: [
          ...state.results,
          payload.result,
        ],
      };
    case 'SET_DEFAULT':
      return { ...INITIAL_STATE };
    case 'INC_COMBO':
      return {
        ...state,
        marksCombo: state.marksCombo + 1,
      };
    case 'RESET_COMBO':
      return {
        ...state,
        marksCombo: 0,
      };
    // case 'ADD_MARK':
    //   return {
    //     ...state,
    //     marks: [...state.marks],
    //   };
    // case 'RESET_MARKS':
    //   return {
    //     ...state,
    //     marks: ['empty', 'empty', 'empty'],
    //   };
    case 'INIT_GAME':
    case 'START_GAME':
    case 'SOUND_STATUS':
    case 'SET_RESULTS':
    case 'OVER_GAME':
    case 'LEARNED_WORDS':
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
