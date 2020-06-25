const showAnswerSelector = (state) => state.cards.rightAnswer;
const cardsInfoSelector = (state) => state.cards.cardsInfo;
const lastCardSelector = (state) => state.cards.lastCard;

export { showAnswerSelector, cardsInfoSelector, lastCardSelector };
