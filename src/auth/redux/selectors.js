import { createSelector } from 'reselect';

export const authStateSelector = (state) => state.auth;

export const userSelector = createSelector(
  authStateSelector,
  ({ user }) => user,
);

export const loggedSelector = createSelector(
  authStateSelector,
  ({ user }) => !!user,
);
