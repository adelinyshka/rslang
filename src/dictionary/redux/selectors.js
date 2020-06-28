import { createSelector } from 'reselect';

const dictionarySelector = (state) => state.dictionary;

export const userWordsSelector = createSelector(
  dictionarySelector,
  ({ userWords }) => userWords,
);

export const selectedWordsSelector = createSelector(
  dictionarySelector,
  ({ selectedWords }) => selectedWords,
);

export const isAllSelectedSelector = createSelector(
  dictionarySelector,
  ({ isAllSelected }) => isAllSelected,
);

export default dictionarySelector;
