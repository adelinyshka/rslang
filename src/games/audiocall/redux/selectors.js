import { createSelector } from 'reselect';

export const audiocallSelector = (state) => state.audiocall;

export const statusGameSelector = createSelector(
  audiocallSelector,
  ({ statusGame }) => statusGame,
);

export const levelSelector = createSelector(
  audiocallSelector,
  ({ level }) => level,
);
