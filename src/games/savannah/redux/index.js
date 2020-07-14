
export const setStatusGame = (statusGame) => ({
  type: 'SET_STATUS_GAME',
  statusGame,
});

export const setLevel = (level) => ({
  type: 'SET_LEVEL',
  level,
});

const INITIAL_STATE = {
  statusGame: '',
  level: 0,
};

const savannahReducer = (state = INITIAL_STATE, action) => {
  const {
    type,
    ...payload
  } = action;

  switch (type) {
    case 'SET_STATUS_GAME':
    case 'SET_LEVEL':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default savannahReducer;
