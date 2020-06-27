export const setUserWords = (userWords) => ({
  type: 'SET_USER_WORDS',
  userWords,
});

const INITIAL_STATE = {
  userWords: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case 'SET_USER_WORDS':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
