import { createSelector } from 'reselect';

export const sprintSelector = (state) => state.sprint;

export const wordsSelector = createSelector(
  sprintSelector,
  ({ words }) => words,
);

export const activeWordSelector = createSelector(
  sprintSelector,
  ({ activeWord }) => activeWord,
);

export const modeSelector = createSelector(
  sprintSelector,
  ({ mode }) => mode,
);

export const levelSelector = createSelector(
  sprintSelector,
  ({ level }) => level,
);

export const translateActiveWordSelector = createSelector(
  sprintSelector,
  ({ translateActiveWord }) => translateActiveWord,
);
