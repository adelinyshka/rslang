const INITIAL_STATE = {
  stateGame: false,
  words: {},
  level: 1,
  activeWord: 'base_word',
};

const speakitReducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    words,
    level,
    activeWord,
  } = action;
  const obj = {};
  switch (type) {
    case 'START_GAME':
      Object.assign(obj, state);
      obj.stateGame = true;
      return obj;
    case 'SET_WORDS':
      Object.assign(obj, state);
      obj.words = words;
      return obj;
    case 'SET_LEVEL':
      Object.assign(obj, state);
      obj.level = level;
      return obj;
    case 'SET_ACTIVE_WORD':
      Object.assign(obj, state);
      obj.activeWord = activeWord;
      return obj;
    default:
      return state;
  }
};

export default speakitReducer;
