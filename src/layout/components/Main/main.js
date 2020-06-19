import React from 'react';
import './main.css';
import miniGames from './Verify.png';
import cards from './Camera.png';

export default function Main() {
  return (
    <main>
      <h1 className="logo">
        <span>RS </span>
        Lang
      </h1>
      <div className="main_content">
        <div className="block minigames">
          <img src={miniGames} alt="games" />
          <h2>Мини игры</h2>
          <p className="p_games">
            6 увлекательных мини игр для тренировки слов
          </p>
          <button type="button" variant="contained" disableelevation="true">
            ИГРАТЬ
          </button>
        </div>
        <div className="block cards">
          <img src={cards} alt="cards" />
          <h2>Карточки</h2>
          <p>
            Благодаря методике интервального повторения вы
            быстро пополните свой словарный запас
          </p>
          <button type="button" variant="contained" disableelevation="true">
            УЧИТЬ
          </button>
          <form>
            <div className="radio">
              <input type="radio" value="option1" defaultChecked />
                Новые
            </div>
            <div className="radio">
              <input type="radio" value="option2" />
                Повтор
            </div>
            <div className="radio">
              <input type="radio" value="option3" />
                Все
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
