import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Game from './Game';
import Button from './Button';
import style from './StartPage.module.css';

const StartPage = (props) => (
  <div className={style.Wrapper}>
    {console.log('props start page: ', props)}
    <h1>
        Мемори
    </h1>
    <p>Соберите все пары слов, за отведенное время.</p>
    <p>Игра помогает улучшить запоминание слов.</p>
    <Button type="start" onClick={props.onStart}>Start</Button>
  </div>
);
export default StartPage;
