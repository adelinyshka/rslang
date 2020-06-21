import { combineReducers } from 'redux';

const isRightReducer = (state = false, action) => {
  switch (action.type) {
    case 'RIGHT_ANSWER':
      return true;
    case 'WRONG_ANSWER':
      return false;
    default:
      return state;
  }
};

const cardsInfoReducer = (state = [], action) => {
  const { type, ...payload } = action;
  switch (type) {
    case 'CHANGE_CARDS':
      return payload;
    default:
      return state;
  }
};

const lastCardReducer = (state = {}, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case 'CHANGE_LAST_CARD':
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  isRight: isRightReducer,
  cardsInfo: cardsInfoReducer,
  lastCard: lastCardReducer,
});
