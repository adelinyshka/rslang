import { combineReducers } from 'redux';

const wasMistakenReducer = (state = false, action) => {
  switch (action.type) {
    case 'ANSWERED_WRONG':
      return true;
    case 'CLEAR_ANSWER':
      return false;
    default:
      return state;
  }
};

const showAnswerReducer = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_ANSWER':
      return !state;
    case 'HIDE_ANSWER':
      return false;
    default:
      return state;
  }
};

const cardsArrReducer = (state = [], action) => {
  const { type, cardsArr } = action;
  switch (type) {
    case 'CHANGE_CARDS':
      return cardsArr;
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

const wasAnsweredReducer = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case 'ANSWERED':
      return true;
    case 'CLEAR_ANSWER':
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  showAnswer: showAnswerReducer,
  cardsArr: cardsArrReducer,
  previousCard: lastCardReducer,
  wasAnswered: wasAnsweredReducer,
  wasMistaken: wasMistakenReducer,
});
