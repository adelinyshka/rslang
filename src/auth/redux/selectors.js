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

export const tokenSelector = createSelector(
  authStateSelector,
  ({ user }) => (user ? user.token : null),
);

export const refreshTokenSelector = createSelector(
  authStateSelector,
  ({ user }) => (user ? user.refreshToken : null),
);

const parseJwt = (token) => {
  const [, base64Url] = token.split('.');
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(
    (c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`,
  ).join(''));
  const { exp } = JSON.parse(jsonPayload);

  return exp;
};

export const isTokenValidSelector = createSelector(
  tokenSelector,
  (token) => token && parseJwt(token) * 1000 > Date.now(),
);
