import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import StyleSwitcherLevel from './style.LevelSwitcher';

const countLevel = 6;
let levels = new Array(countLevel);
levels = levels
  .fill(' ')
  .map((el, index) => index + 1);

const SwitcherLevel = ({ changeActiveLevel, currentLevel }) => {
  const [activeLevel, setActiveLevel] = useState(1);

  useEffect(() => {
    if (currentLevel && currentLevel !== activeLevel) {
      setActiveLevel(currentLevel);
    }
  }, [activeLevel, currentLevel]);

  const handlerOnClick = useCallback((level, index) => {
    setActiveLevel(level);
    changeActiveLevel(index);
  }, [changeActiveLevel]);

  return (
    <StyleSwitcherLevel>
      <div className="div">
        <p className="p">Уровень</p>
        <ul className="ul">
          {
            levels.map((level, index) => (
              <li
                key={level}
                onClick={() => handlerOnClick(level, index)}
                className={classNames('li', { active: activeLevel === level })}
                role="menuitem"
              >
                {level}
              </li>
            ))
          }
        </ul>
      </div>
    </StyleSwitcherLevel>
  );
};

SwitcherLevel.propTypes = {
  changeActiveLevel: PropTypes.func.isRequired,
  currentLevel: PropTypes.number.isRequired,
};

export default SwitcherLevel;
