import React, { useState } from 'react';
// import styles from './Audiocall.module.css';
import Startpage from './Startpage';
import Game from './Game';

// const getWords = async (page, group) => {
//   const url = `${'https://afternoon-falls-25894.herokuapp.com/words?page='}
//   ${page}&group=${group}`;
//   const res = await fetch(url);
//   const json = await res.json();
//   console.log(json[0].word);
//   console.log(JSON.stringify(json, null, 1));
// };

// getWords(0, 5);

export default function Audiocall() {
  const [game, setStatus] = useState(false);

  return (
    <div>
      { !game ? <Startpage callback={setStatus} />
        : <Game callback={setStatus} /> }
    </div>
  );
}
