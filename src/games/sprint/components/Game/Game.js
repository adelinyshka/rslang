import React, { useCallback } from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import LevelSwitcher from '../LvlSwitcher/LvlSwitcher';
import { getWords } from '../../utils/index';
import StyleGame from './style.Game';

// import {
//   setWords,
//   setImage,
//   setTranslateActiveWord,
//   setLevel,
// } from '../../redux/index';

// import {
//   modeSelector,
//   wordsSelector,
//   activeWordSelector,
//   imageSelector,
//   translateActiveWordSelector,
//   levelSelector,
// } from '../../redux/selectors';

function Game() {
  return (
    <StyleGame>
      <p>Игра тута</p>
    </StyleGame>
  );
}

export default Game;
