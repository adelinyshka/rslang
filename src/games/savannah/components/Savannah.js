import React from 'react';
import { useSelector } from 'react-redux';
import Game from './Game/Game';
import StartPage from './Startpage/StartPage';

import { statusGameSelector } from '../redux/selectors';

function Savannah() {
  const statusGame = useSelector(statusGameSelector);

  return (
    statusGame ? <Game /> : <StartPage />
  );
}

export default Savannah;
