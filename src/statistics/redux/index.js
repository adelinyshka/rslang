const INITIAL_STATE = {
  learnedWords: 0,
  optional: {
    cards: {
    },
    speakit: {
    },
    audiocall: {
    },
    memory: {
    },
    savannah: {
    },
    sprint: {
    },
    puzzle: {
    },
  },
};

export const setStatistics = (statistics) => ({
  type: 'SET_STATISTICS',
  ...statistics,
});

export default (state = INITIAL_STATE, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case 'SET_STATISTICS':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
