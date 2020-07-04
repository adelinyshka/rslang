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
  type: 'SET_TRANSLATE_ACTIVE_WORD',
  translateActiveWord,
});

export const setImage = (image) => ({
  type: 'SET_IMAGE',
  image,
});

export const setSpeechActiveWord = (speechActiveWord) => ({
  type: 'SET_SPEECH_ACTIVE_WORD',
  speechActiveWord,
});

export const setSpeechWords = (speechWords) => ({
  type: 'SET_SPEECH_WORDS',
  speechWords,
});

const INITIAL_STATE = {
  statusGame: '', // no-speach and speach and ''(startScreen)
  words: [],
  level: 0,
  activeWord: '',
  translateActiveWord: '',
  speechActiveWord: '',
  image: './assets/images/speakit/base-game-image.png',
  speechWords: [],
};

const speakitReducer = (state = INITIAL_STATE, action) => {
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
    case 'SET_SPEECH_ACTIVE_WORD':
    case 'SET_SPEECH_WORDS':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default speakitReducer;
