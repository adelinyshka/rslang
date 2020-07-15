const INITIAL_STATE = {
  userWords: null,
  selectedWords: {},
  wordsAmount: 30,
  isAllSelected: false,
  isAllDeleted: false,
  isAllRecovered: false,
};

export const updateWordsAmount = () => ({
  type: 'UPDATE_WORDS_AMOUNT',
});

export const setUserWords = (userWords) => ({
  type: 'SET_USER_WORDS',
  userWords,
});

export const selectWords = (selectedWords) => ({
  type: 'SELECT_WORDS',
  selectedWords,
});

export const setAllSelected = (isAllSelected) => ({
  type: 'SET_ALL_SELECTED',
  isAllSelected,
});

export const setAllDeleted = (isAllDeleted) => ({
  type: 'SET_ALL_DELETED',
  isAllDeleted,
});

export const setAllRecovered = (isAllRecovered) => ({
  type: 'SET_ALL_RECOVERED',
  isAllRecovered,
});

export const resetState = () => ({
  type: 'RESET_STATE',
});

const dictionaryReducer = (state = INITIAL_STATE, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case 'RESET_STATE':
      return {
        ...INITIAL_STATE,
      };
    case 'UPDATE_WORDS_AMOUNT':
      return {
        ...state,
        wordsAmount: state.wordsAmount + 30,
      };
    case 'SELECT_WORDS':
      return {
        ...state,
        selectedWords: {
          ...state.selectedWords,
          ...payload.selectedWords,
        },
      };
    case 'SET_USER_WORDS':
    case 'SET_ALL_SELECTED':
    case 'SET_ALL_DELETED':
    case 'SET_ALL_RECOVERED':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default dictionaryReducer;
