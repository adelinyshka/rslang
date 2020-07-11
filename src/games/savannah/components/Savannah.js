import React from 'react';
import { useSelector } from 'react-redux';
import Game from './Game';
import StartPage from './StartPage';

import { statusGameSelector } from '../redux/selectors';

function Savannah() {
  const statusGame = useSelector(statusGameSelector);

  return (
    <div>
      {statusGame ? (<Game />) : (<StartPage />)}
    </div>
  );
}

export default Savannah;
