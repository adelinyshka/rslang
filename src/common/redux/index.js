const INITIAL_STATE = {
  showSpinner: false,
};

export const setShowSpinner = (showSpinner) => ({
  type: 'SET_SHOW_SPINNER',
  showSpinner,
});

export default (state = INITIAL_STATE, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case 'SET_SHOW_SPINNER':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
