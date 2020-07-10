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

export default (state = INITIAL_STATE, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case 'SET_SETTINGS':
    default:
      return {
        ...state,
        ...payload,
      };
  }
};
