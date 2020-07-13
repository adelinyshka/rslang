import { createSelector } from 'reselect';

const commonSelector = (state) => state.common;

export const showSpinnerSelector = createSelector(
  commonSelector,
  ({ showSpinner }) => showSpinner,
);

export default commonSelector;
