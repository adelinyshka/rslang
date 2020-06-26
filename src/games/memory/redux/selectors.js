import { createSelector } from 'reselect';

export const memorySelector = (state) => state.memory;

export const wordsSelector = createSelector(
  memorySelector,
  ({ words }) => words,
);

export const activeWordSelector = createSelector(
  memorySelector,
  ({ activeWord }) => activeWord,
);

export const modeSelector = createSelector(
  memorySelector,
  ({ mode }) => mode,
);

export const levelSelector = createSelector(
  memorySelector,
  ({ level }) => level,
);

export const imageSelector = createSelector(
  memorySelector,
  ({ image }) => image,
);

export const translateActiveWordSelector = createSelector(
  memorySelector,
  ({ translateActiveWord }) => translateActiveWord,
);
