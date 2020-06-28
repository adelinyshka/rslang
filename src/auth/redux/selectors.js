import { createSelector } from 'reselect';

export const authStateSelector = (state) => state.auth;

export const userSelector = createSelector(
  authStateSelector,
  ({ user }) => user,
);

export const isAuthenticatedSelector = createSelector(
  authStateSelector,
  ({ user }) => !!user,
);

export const emailSelector = createSelector(
  authStateSelector,
  ({ user }) => (user ? user.email : 'user_login'),
);

export const userIdSelector = createSelector(
  authStateSelector,
  ({ user }) => (user && user.userId),
);

