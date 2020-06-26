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

export const setWasMistaken = (wasMistaken) => ({
  type: 'WAS_MISTAKEN',
  wasMistaken,
});

export const clearAnswer = () => ({
  type: 'CLEAR_ANSWER',
  wasMistaken: true,
  showAnswer: false,
  wasAnswered: false,
});

const INITIAL_STATE = {
  wasMistaken: true,
  showAnswer: false,
  wasAnswered: false,
  cardsArr: null,
  previousCard: null,
};

const cardsReducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    ...payload
  } = action;

  switch (type) {
    case 'SET_CARDS':
    case 'SET_LAST_CARD':
    case 'SHOW_ANSWER':
    case 'SET_ANSWERED':
    case 'WAS_MISTAKEN':
    case 'CLEAR_ANSWER':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default cardsReducer;
