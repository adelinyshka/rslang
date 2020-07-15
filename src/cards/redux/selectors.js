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
  (
    { mistakenWords, passedCards },
  ) => passedCards - Object.keys(mistakenWords).length,
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

export const gameEndedSelector = createSelector(
  cardsSelector,
  ({ gameEnded }) => gameEnded,
);

export const newWordsSelector = createSelector(
  cardsSelector,
  ({ newWords }) => newWords,
);

export const longestStreakSelector = createSelector(
  cardsSelector,
  ({ longestStreak }) => longestStreak,
);

export const navFetchOptionsSelector = createSelector(
  cardsSelector,
  ({ navFetchOptions }) => navFetchOptions,
);
