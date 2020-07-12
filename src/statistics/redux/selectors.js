import { createSelector } from 'reselect';

const statsSelector = (state) => state.statistics;

export const cardsStatsSelector = createSelector(
  statsSelector,
  ({ optional }) => optional.cards,
);

export const todayCardsStats = createSelector(
  cardsStatsSelector,
  (cards) => {
    const date = new Date(Date.now());
    const dateString = date.toLocaleDateString('en-US');
    const todayStats = cards[dateString];
    return todayStats || {
      passedCards: 0,
      newWords: 0,
      rightAnswers: 0,
      longestStreak: 0,
    };
  },
);

export const gamesStatsSelector = createSelector(
  statsSelector,
  ({ optional }) => {
    const { cards, ...games } = optional;
    return games;
  },
);
