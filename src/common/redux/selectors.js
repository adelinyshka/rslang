import { createSelector } from 'reselect';

const commonSelector = (state) => state.common;

export const showSpinnerSelector = createSelector(
  commonSelector,
  ({ showSpinner }) => showSpinner,
);

export const errorInfoSelector = createSelector(
  commonSelector,
  ({ errorInfo }) => errorInfo,
);

export default commonSelector;
