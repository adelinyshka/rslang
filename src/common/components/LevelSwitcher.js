import React from 'react';
import PropTypes from 'prop-types';

import StyleSwitcherLevel from './style.LevelSwitcher';

const countLevel = 6;
const levels = new Array(countLevel);

const SwitcherLevel = ({ activeLevel, handlerOnClick }) => (
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
                onClick={() => handlerOnClick(activeLevel, index)}
                className={activeLevel === index ? 'li active' : 'li'}
              >
                {level}
              </li>
            ))
        }
      </ul>
    </div>
  </StyleSwitcherLevel>
);

SwitcherLevel.propTypes = {
  activeLevel: PropTypes.number.isRequired,
  handlerOnClick: PropTypes.func.isRequired,
};

export default SwitcherLevel;
