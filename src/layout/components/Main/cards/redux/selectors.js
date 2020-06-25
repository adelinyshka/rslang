import { createSelector } from 'reselect';

const cardsSelector = (state) => state.cards;

const showAnswerSelector = createSelector(
  cardsSelector,
  ({ showAnswer }) => showAnswer,
);
const cardsArrSelector = createSelector(
  cardsSelector,
  ({ cardsArr }) => cardsArr,
);
const lastCardSelector = createSelector(
  cardsSelector,
  ({ previousCard }) => previousCard,
);
const wasAnsweredSelector = createSelector(
  cardsSelector,
  ({ wasAnswered }) => wasAnswered,
);
const wasMistakenSelector = createSelector(
  cardsSelector,
  ({ wasMistaken }) => wasMistaken,
);

export {
  showAnswerSelector, cardsArrSelector, lastCardSelector, wasAnsweredSelector,
  wasMistakenSelector,
};
