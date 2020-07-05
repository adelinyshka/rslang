import React, { useState } from 'react';
// import styles from './Audiocall.module.css';
import Startpage from './Startpage';
import Game from './Game';

export default function Audiocall() {
  const [game, setStatus] = useState(false);

  return (
    <div>
      { !game ? <Startpage callback={setStatus} />
        : <Game callback={setStatus} /> }
    </div>
  );
}
