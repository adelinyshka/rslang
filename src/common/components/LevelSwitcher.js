import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StyleSwitcherLevel from './style.LevelSwitcher';

const countLevel = 6;
const levels = new Array(countLevel);

const SwitcherLevel = ({ handlerOnClick }) => {
  const [activeLevel, setActiveLevel] = useState(1);

  return (
    <StyleSwitcherLevel>
      <div className="div">
        <p className="p">Уровень</p>
        <ul className="ul">
          {
            levels
              .fill(' ')
              .map((el, index) => index + 1)
              .map((level, index) => (
                <li
                  key={level}
                  onClick={() => {
                    console.log(level);
                    setActiveLevel(level);
                    handlerOnClick(index);
                  }}
                  className={activeLevel === level ? 'li active' : 'li'}
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
  handlerOnClick: PropTypes.func.isRequired,
};

export default SwitcherLevel;
