const INITIAL_STATE = {
  showSpinner: false,
  errorInfo: null,
};

export const setShowSpinner = (showSpinner) => ({
  type: 'SET_SHOW_SPINNER',
  showSpinner,
});

export const setErrorInfo = (errorInfo) => ({
  type: 'SET_ERROR_INFO',
  errorInfo,
});

export default (state = INITIAL_STATE, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case 'SET_SHOW_SPINNER':
    case 'SET_ERROR_INFO':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
