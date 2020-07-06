export const setStatusGame = (statusGame) => ({
  type: 'SET_STATUS_GAME',
  statusGame,
});

const INITIAL_STATE = {
  statusGame: '',
};

const savannahReducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    ...payload
  } = action;

  switch (type) {
    case 'SET_STATUS_GAME':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default savannahReducer;
