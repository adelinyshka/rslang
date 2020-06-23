import React from 'react';
import { useSelector } from 'react-redux';
import SwitcherLevel from './SwitcherLevel';
import BlockWords from './BlockWords';

import {
  modeSelector,
  wordsSelector,
  activeWordSelector,
  imageSelector,
  translateActiveWordSelector,
} from '../redux/selectors';

function Game() {
  const image = useSelector(imageSelector);
  const activeWord = useSelector(activeWordSelector);
  const translateActiveWord = useSelector(translateActiveWordSelector);
  const words = useSelector(wordsSelector);
  const statusGame = useSelector(modeSelector);
  console.log(translateActiveWord);

  return (
    <div className="wrapper">
      <SwitcherLevel />
      <figure>
        <img src={image} alt={translateActiveWord} />
        <figcaption>
          {translateActiveWord}
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
