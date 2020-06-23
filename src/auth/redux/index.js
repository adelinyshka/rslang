export const login = ({ email, token, userId }) => ({
  type: 'LOG_IN',
  user: {
    email,
    token,
    userId,
  },
});

export const logout = () => ({
  type: 'LOG_OUT',
  user: null,
});

const INITIAL_STATE = {
  user: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case 'LOG_IN':
    case 'LOG_OUT':
      return { ...payload };
    default:
      return state;
  }
};

export default authReducer;
