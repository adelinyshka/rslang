import { createSelector } from 'reselect';

const settingsSelector = (state) => state.settings;

export const wordsPerDaySelector = createSelector(
  settingsSelector,
  ({ wordsPerDay }) => wordsPerDay,
);

export const newCardsAmountSelector = createSelector(
  settingsSelector,
  ({ optional }) => optional.newCardsAmount,
);

export default settingsSelector;
