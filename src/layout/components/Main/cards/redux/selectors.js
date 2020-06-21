const isRightSelector = (state) => state.cards.isRight;
const cardsInfoSelector = (state) => state.cards.cardsInfo;
const lastCardSelector = (state) => state.cards.lastCard;

export { isRightSelector, cardsInfoSelector, lastCardSelector };
