import { createSelector } from 'reselect';

const dictionarySelector = (state) => state.dictionary;

export const userWordsSelector = createSelector(
  dictionarySelector,
  ({ userWords }) => userWords,
);

export default dictionarySelector;
