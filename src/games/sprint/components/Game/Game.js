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
      <p>{words[count].translate}</p>
      <button onClick={() => setCount(count + 1)}>правильно</button>
      <button onClick={() => setCount(count + 1)}>не првавильно</button>
    </StyleGame>
  );
}

export default Game;
