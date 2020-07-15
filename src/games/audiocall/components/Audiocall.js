import React, { useState } from 'react';
import Startpage from './Startpage';
import Game from './Game';

export default function Audiocall() {
  const [game, setStatus] = useState(false);
  const [level, setLevel] = useState(0);
  const changeLevel = (currentLevel) => { setLevel(currentLevel); };
  return (
    <div>
      { !game ? (
        <Startpage
          callback={setStatus}
          changeActiveLevel={changeLevel}
        />
      )
        : <Game callback={setStatus} level={level} /> }
    </div>
  );
}
