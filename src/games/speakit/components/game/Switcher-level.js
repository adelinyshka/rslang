import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from '../../style.module.css';
import action from '../../redux/actionsSpeakit';
import getWords from '../get-words';

const SwitcherLevel = () => {
  const dispatch = useDispatch();
  const activeLevel = useSelector((state) => state.speakit.level);
  const countLevel = 6;
  const array = new Array(countLevel);

  const changeActiveLevel = async (event) => {
    const { tagName, id } = event.target;
    if (tagName === 'LI') {
      const numId = Number(id);
      if (activeLevel !== numId) {
        const words = await getWords(numId);

        if (words.length > 1) {
          dispatch(action.setWords(words));
          dispatch(action.setLevel(numId));
        }
      }
    }
  };

  const levels = array
    .fill(' ')
    .map((element, index) => index + 1)
    .map((element) => (
      <li
        className={`${style.switcher} ${style.switcherActive}`}
        key={String(element)}
        id={element - 1}
      >
        {element}
      </li>
    ));

  return (
    <div
      className={`${style.switcherLevel}`}
      onClick={(event) => changeActiveLevel(event)}
    >
      <p className={`${style.p}`}>Уровень</p>
      <ul className={`${style.ul}`}>
        {levels}
      </ul>
    </div>
  );
};

export default SwitcherLevel;
