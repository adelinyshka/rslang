import { createSelector } from 'reselect';

export const cardsSelector = (state) => state.cards;

export const isShowingAnswerSelector = createSelector(
  cardsSelector,
  ({ isShowingAnswer }) => isShowingAnswer,
);

export const cardsArrSelector = createSelector(
  cardsSelector,
  ({ cardsArr }) => cardsArr,
);

export const lastCardSelector = createSelector(
  cardsSelector,
  ({ previousCard }) => previousCard,
);

export const wasAnsweredSelector = createSelector(
  cardsSelector,
  ({ wasAnswered }) => wasAnswered,
);

export const wasMistakenSelector = createSelector(
  cardsSelector,
  ({ wasMistaken }) => wasMistaken,
);

export const cardsModeSelector = createSelector(
  cardsSelector,
  ({ cardsMode }) => cardsMode,
);

export const rightAnswersSelector = createSelector(
  cardsSelector,
  ({ rightAnswers }) => rightAnswers,
);

export const mistakenWordsSelector = createSelector(
  cardsSelector,
  ({ mistakenWords }) => mistakenWords,
);

export const cardsTotalSelector = createSelector(
  cardsSelector,
  ({ cardsTotal }) => cardsTotal,
);

export const passedCardsSelector = createSelector(
  cardsSelector,
  ({ passedCards }) => passedCards,
);
