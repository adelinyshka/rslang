const INITIAL_STATE = {
  wasMistaken: true,
  mistakenWords: {},
  isShowingAnswer: false,
  wasAnswered: false,
  cardsArr: null,
  previousCard: null,
  cardsMode: 'new',
  passedCards: 0,
  newWords: 0,
  longestStreak: 0,
  cardsTotal: 0,
  gameEnded: false,
};

export const setGameEnded = (gameEnded) => ({
  type: 'SET_GAME_ENDED',
  gameEnded,
});

export const setCardsTotal = (cardsTotal) => ({
  type: 'SET_CARDS_TOTAL',
  cardsTotal,
});

export const pushMistakenWord = (mistakenWord) => ({
  type: 'PUSH_MISTAKEN_WORD',
  mistakenWord,
});

export const setLongestStreak = (longestStreak) => ({
  type: 'SET_LONGEST_STREAK',
  longestStreak,
});

export const incrementNewWords = (newWords) => ({
  type: 'INC_NEW_WORDS',
  newWords,
});

export const setRightAnswers = (rightAnswers) => ({
  type: 'SET_RIGHT_ANSWERS',
  rightAnswers,
});

export const incrementPassedCards = () => ({
  type: 'INC_PASSED_CARDS',
});

export const setCardsMode = (cardsMode) => ({
  type: 'SET_CARDS_MODE',
  cardsMode,
});

export const setCards = (cardsArr) => ({
  type: 'SET_CARDS',
  cardsArr,
});

export const showAnswer = (isShowingAnswer) => ({
  type: 'SHOW_ANSWER',
  isShowingAnswer,
});

export const setLastCard = (previousCard) => ({
  type: 'SET_LAST_CARD',
  previousCard,
});

export const setAnswered = (wasAnswered) => ({
  type: 'SET_ANSWERED',
  wasAnswered,
});

export const clearAnswer = () => ({
  type: 'CLEAR_ANSWER',
  wasMistaken: true,
  isShowingAnswer: false,
  wasAnswered: false,
});

const cardsReducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    ...payload
  } = action;

  switch (type) {
    case 'PUSH_MISTAKEN_WORD':
      return {
        ...state,
        mistakenWords: {
          ...state.mistakenWords,
          ...payload.mistakenWord,
        },
      };

    case 'INC_PASSED_CARDS':
      return {
        ...state,
        passedCards: state.passedCards + 1,
      };
    case 'INC_NEW_WORDS':
      return {
        ...state,
        newWords: state.newWords + 1,
      };
    case 'SET_GAME_ENDED':
    case 'SET_CARDS_TOTAL':
    case 'SET_CARDS':
    case 'SET_LAST_CARD':
    case 'SHOW_ANSWER':
    case 'SET_ANSWERED':
    case 'CLEAR_ANSWER':
    case 'SET_LONGEST_STREAK':
    case 'SET_NEW_WORDS':
    case 'SET_RIGHT_ANSWERS':
    case 'SET_CARDS_MODE':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default cardsReducer;
