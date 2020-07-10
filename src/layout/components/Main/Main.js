import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Main.module.css';
import Panel from './Panel';
import { setCardsMode } from '../../../cards/redux';

export default function Main() {
  const dispatch = useDispatch();
  const values = [
    { value: 'new', label: 'Новые', defaultChecked: true },
    { value: 'repeat', label: 'Повтор' },
    { value: 'all', label: 'Все' }];
  return (
    <div className={styles.Main}>
      <div className={styles.Main_content}>
        <Panel
          myStyle={styles.P_games}
          img="./assets/images/Verify.png"
          alt="games"
          header="Мини игры"
          description="6 увлекательных мини игр для тренировки слов"
          actionName="ИГРАТЬ"
        />
        <Panel
          img="./assets/images/Camera.png"
          alt="cards"
          header="Карточки"
          description="Благодаря методике интервального повторения вы
            быстро пополните свой словарный запас"
          actionName="УЧИТЬ"
        >
          <form>
            {
              values.map(({ value, label, defaultChecked = false }, index) => (
                <div key={index} className={styles.Radio}>
                  <input
                    type="radio"
                    name="gameMode"
                    value={value}
                    defaultChecked={defaultChecked}
                    onClick={() => dispatch(setCardsMode(value))}
                  />
                  {label}
                </div>
              ))
            }
          </form>
        </Panel>
      </div>
    </div>
  );
}
