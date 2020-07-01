import { createSelector } from 'reselect';

const dictionarySelector = (state) => state.dictionary;

export const userWordsSelector = createSelector(
  dictionarySelector,
  ({ userWords }) => userWords || [],
);

export const paginatedResultsSelector = createSelector(
  dictionarySelector,
  // ({ userWords }) => (userWords ? userWords[0].paginatedResults : []),
  () => [],
);

export const selectedWordsSelector = createSelector(
  dictionarySelector,
  ({ selectedWords }) => selectedWords,
);

export const isAllDeletedSelector = createSelector(
  dictionarySelector,
  ({ isAllDeleted }) => isAllDeleted,
);

export const isAllSelectedSelector = createSelector(
  dictionarySelector,
  ({ isAllSelected }) => isAllSelected,
);

export const isSomeUnSelectedSelector = createSelector(
  dictionarySelector,
  ({ selectedWords }) => Object.values(selectedWords).some((el) => !el),
);

export const isEveryUnselectedSelector = createSelector(
  dictionarySelector,
  ({ selectedWords }) => Object.values(selectedWords).every((el) => !el),
);

export default dictionarySelector;
