import React from 'react';
import { useSelector } from 'react-redux';
import SwitcherLevel from './SwitcherLevel';
import BlockWords from './BlockWords';

import {
  modeSelector,
  wordsSelector,
  activeWordSelector,
} from '../redux/selectors';

function Game() {
  const words = useSelector(wordsSelector);
  const statusGame = useSelector(modeSelector);
  const activeWord = useSelector(activeWordSelector);

  return (
    <div className="wrapper">
      <div className="education__switcher-words">
        <p>level</p>
        <SwitcherLevel />
      </div>
      <figure>
        <img src="./dist/img/education-main.jpg" alt="English Words" />
        <figcaption>
          Word
        </figcaption>
      </figure>
      <div className="education__block-spoken-words" />
      <div className="education__block-words">
        <BlockWords />
      </div>
      <div className="education__block-button">
        <button type="button" className="btn">New words</button>
        <button type="button" className="btn">Speak please</button>
        <button type="button" className="btn">Results</button>
      </div>
    </div>
  );
}

export default Game;
