import React from 'react';
import PropTypes from 'prop-types';

import StyleRules from './style.Rules';

const Rules = ({ setModalRules }) => (
  <StyleRules>
    <div className="window">
      <section className="text-section">
        <div>
          <img
            src="./../assets/images/question.svg"
            alt="question"
          />
        </div>
        <p>Произносите слова правильно, чтобы победить</p>
      </section>
      <section className="button-section">
        <button type="button" onClick={setModalRules}>
          Понятно
        </button>
      </section>
    </div>
  </StyleRules>
);

Rules.propTypes = {
  setModalRules: PropTypes.func.isRequired,
};

export default Rules;
