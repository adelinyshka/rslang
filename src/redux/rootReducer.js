import { combineReducers } from 'redux';
import authReducer from '../auth/redux';
import dictionaryReducer from '../dictionary/redux';
import settingsReducer from '../settings/redux';
import audiocallReducer from '../games/audiocall/redux';
import memoryReducer from '../games/memory/redux';
import puzzleReducer from '../games/puzzle/redux';
import savannahReducer from '../games/savannah/redux';
import speakitReducer from '../games/speakit/redux';
import sprintReducer from '../games/sprint/redux';
import statisticsReducer from '../statistics/redux';
import cardsReducer from '../cards/redux';

export default combineReducers({
  auth: authReducer,
  dictionary: dictionaryReducer,
  settings: settingsReducer,
  audiocall: audiocallReducer,
  memory: memoryReducer,
  puzzle: puzzleReducer,
  savannah: savannahReducer,
  speakit: speakitReducer,
  sprint: sprintReducer,
  statistics: statisticsReducer,
  cards: cardsReducer,
});
