import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import StyleGame from './style.Game';

import {
  wordsSelector,
} from '../../redux/selectors';

function Game() {
  const words = useSelector(wordsSelector);
  const [count, setCount] = useState(0);
  return (
    <StyleGame>
      <p>{words[count].word}</p>
      <p>{words[count].wordTranslate}</p>
      <button onClick={() => setCount(count + 1)}>Next word</button>
    </StyleGame>
  );
}

export default Game;
