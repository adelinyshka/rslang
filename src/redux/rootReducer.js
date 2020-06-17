import { combineReducers } from 'redux';
import authReducer from '../auth/redux';
import dictionaryReducer from '../dictionary/redux';
import settingsReducer from '../settings/redux';
import audiocallReducer from '../games/audiocall/redux';
import customReducer from '../games/custom/redux';
import puzzleReducer from '../games/puzzle/redux';
import savannahReducer from '../games/savannah/redux';
import speakitReducer from '../games/speakit/redux';
import sprintReducer from '../games/sprint/redux';

export default combineReducers({
  auth: authReducer,
  dictionary: dictionaryReducer,
  settings: settingsReducer,
  audiocall: audiocallReducer,
  custom: customReducer,
  puzzle: puzzleReducer,
  savannah: savannahReducer,
  speakit: speakitReducer,
  sprint: sprintReducer,
});
// feature/skeleton-init commit
