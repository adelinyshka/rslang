import React from 'react';
import redux from 'redux';
import { useDespatch, useSelector } from 'react-redux';
import SwitcherLevel from './Switcher-level';
import BlockWords from './Block-words';

function Game() {
  const game = useSelector((state) => state.speakit.words);
  const activeWord = useSelector((state) => state.speakit.activeWord);
  const statusGame = useSelector((state) => state.speakit.stateGame);
  console.log(game);
  console.log(statusGame);
  console.log(activeWord);
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
