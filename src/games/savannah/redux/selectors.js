import { createSelector } from 'reselect';

export const savannahSelector = (state) => state.speakit;

export const statusGameSelector = createSelector(
  savannahSelector,
  ({ statusGame }) => statusGame,
);
