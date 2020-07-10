import React from 'react';
import { useSelector } from 'react-redux';
import Game from '../Game/Game';
import StartPage from '../StartPage/StartPage';

import { statusGameSelector } from '../../redux/selectors';

function Memory() {
  const statusGame = useSelector(statusGameSelector);

  return (
    statusGame ? <Game /> : <StartPage />
  );
}

export default Memory;
