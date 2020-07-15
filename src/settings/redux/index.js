const INITIAL_STATE = {
  wordsPerDay: 200,
  optional: {
    newCardsAmount: 50,
    wordTranslate: true,
    wordImage: true,
    exampleSentence: true,
    definition: true,
    sentenceTranslate: true,
    transcription: true,
    deleteBtn: true,
    difficultBtn: true,
    showAnswerBtn: true,
    easyInterval: 2,
    mediumInterval: 4,
    hardInterval: 7,
    autoSoundPlay: true,
    interfaceHints: true,
  },
};

export const setSettings = (settings) => ({
  type: 'SET_SETTINGS',
  ...settings,
});

const settingsReducer = (state = INITIAL_STATE, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case 'LOG_OUT':
      return {
        ...INITIAL_STATE,
      };
    case 'SET_SETTINGS':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;
