const INITIAL_STATE = {
  newCardsAmount: 50,
  wholeCardsAmount: 200,
  wordTranslate: true,
  wordImage: true,
  definition: true,
  exampleSentence: true,
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
};

export const setSettings = (settings) => ({
  type: 'SET_SETTINGS',
  settings,
});

export default (state = INITIAL_STATE, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case 'SET_SETTINGS':
      return {
        ...state,
        ...payload.settings,
      };
    default:
      return {
        ...state,
        ...payload,
      };
  }
};
