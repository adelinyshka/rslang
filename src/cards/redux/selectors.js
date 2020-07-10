import { createSelector } from 'reselect';

const cardsSelector = (state) => state.cards;

const isShowingAnswerSelector = createSelector(
  cardsSelector,
  ({ isShowingAnswer }) => isShowingAnswer,
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

const cardsModeSelector = createSelector(
  cardsSelector,
  ({ cardsMode }) => cardsMode,
);

export const rightAnswersSelector = createSelector(
  cardsSelector,
  ({ rightAnswers }) => rightAnswers,
);

export {
  isShowingAnswerSelector, cardsArrSelector, lastCardSelector,
  wasAnsweredSelector, wasMistakenSelector, cardsModeSelector,
};
