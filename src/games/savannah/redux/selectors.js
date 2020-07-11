import { createSelector } from 'reselect';

export const savannahSelector = (state) => state.savannah;

export const statusGameSelector = createSelector(
  savannahSelector,
  ({ statusGame }) => statusGame,
);
