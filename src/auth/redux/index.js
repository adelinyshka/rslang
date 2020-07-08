const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')),
};

export const login = (user) => ({
  type: 'LOG_IN',
  user,
});

export const logout = () => ({
  type: 'LOG_OUT',
  user: null,
});

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, ...payload } = action;
  const newState = {
    ...state,
    user: {
      ...state.user,
      ...payload.user,
    },
  };
  switch (type) {
    case 'LOG_IN':
      localStorage.setItem('user', JSON.stringify(newState.user));
      return newState;
    case 'LOG_OUT':
      localStorage.setItem('user', null);
      return payload;
    default:
      return state;
  }
};

export default authReducer;
