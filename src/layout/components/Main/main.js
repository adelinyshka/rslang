import React from 'react';
import './main.css';
import miniGames from './Verify.png';
import cards from './Camera.png';

export function Main() {
    return (
        <main>
            <h1 className="logo"><span>RS </span>Lang</h1>
            <div className="main_content">
                <div className="block minigames">
                    <img src={miniGames} alt="games" />
                    <h2>Мини игры</h2>
                    <p className="p_games">6 увлекательных мини игр для тренировки слов</p>
                    <button variant="contained" disableelevation="true" >ИГРАТЬ</button>
                </div>
                <div className="block cards">
                    <img src={cards} alt="cards" />
                    <h2>Карточки</h2>
                    <p>Благодаря методике интервального повторения вы быстро пополните свой словарный запас</p>
                    <button variant="contained" disableelevation="true" >УЧИТЬ</button>
                    <form>
                        <div className="radio">
                            <label>
                                <input type="radio" value="option1" defaultChecked={true} />
                                Новые
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="option2" />
                                Повтор
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="option3" />
                                Все
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
