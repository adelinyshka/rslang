const showAnswerSelector = (state) => state.cards.showAnswer;
const cardsArrSelector = (state) => state.cards.cardsArr;
const lastCardSelector = (state) => state.cards.previousCard;
const wasAnsweredSelector = (state) => state.cards.wasAnswered;
const wasMistakenSelector = (state) => state.cards.wasMistaken;

export {
  showAnswerSelector, cardsArrSelector, lastCardSelector, wasAnsweredSelector,
  wasMistakenSelector,
};
