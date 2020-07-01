import { createSelector } from 'reselect';

export const sprintSelector = (state) => state.sprint;

export const statusGameSelector = createSelector(
  sprintSelector,
  ({ statusGame }) => statusGame,
);

export const wordsSelector = createSelector(
  sprintSelector,
  ({ words }) => words,
);

export const levelSelector = createSelector(
  sprintSelector,
  ({ level }) => level,
);
