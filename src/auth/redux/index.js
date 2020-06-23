export const signIn = ({ email, token, userId }) => ({
  type: 'SIGN_IN',
  user: {
    email,
    token,
    userId,
  },
});

export const signOut = () => ({
  type: 'SIGN_OUT',
  user: null,
});

const INITIAL_STATE = {
  user: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case 'SIGN_IN':
    case 'SIGN_OUT':
      return { ...payload };
    default:
      return state;
  }
};

export default authReducer;
