import { combineReducers } from 'redux';
import loggedReducer from './isLogged';

const reducers = combineReducers({
  isLogged: loggedReducer,
});

export default reducers;
