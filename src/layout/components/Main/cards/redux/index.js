import { combineReducers } from 'redux';

// const rightAnswerReducer = (state = false, action) => {
//   switch (action.type) {
//     case 'SHOW_ANSWER':
//       return !state;
//     case 'HIDE_ANSWER':
//       return false;
//     default:
//       return state;
//   }
// };

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
  // rightAnswer: rightAnswerReducer,
  cardsInfo: cardsInfoReducer,
  lastCard: lastCardReducer,
});
