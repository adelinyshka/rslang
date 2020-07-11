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

export const easyIntervalSelector = createSelector(
  settingsSelector,
  ({ optional }) => optional.easyInterval,
);

export const mediumIntervalSelector = createSelector(
  settingsSelector,
  ({ optional }) => optional.mediumInterval,
);

export const hardIntervalSelector = createSelector(
  settingsSelector,
  ({ optional }) => optional.hardInterval,
);

export default settingsSelector;
