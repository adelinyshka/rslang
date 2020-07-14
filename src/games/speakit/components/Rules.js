import React from 'react';
import PropTypes from 'prop-types';

import StyleRules from './style.Rules';

const Rules = ({ setModalRules }) => (
  <StyleRules>
    <div className="pop-up">
      <div className="top warning">
        <div className="icon">
          <img
            src="./../assets/images/speakit/quest.svg"
            alt="question in round"
          />
        </div>
        <section className="content">
          <p>Произносите слова правильно, чтобы победить</p>
        </section>

      </div>
      <div className="bottom">
        <section className="btn-wrapper">
          <button className="exit" type="button" onClick={setModalRules}>
            Понятно
          </button>
        </section>

      </div>
    </div>
  </StyleRules>
);

Rules.propTypes = {
  setModalRules: PropTypes.func.isRequired,
};

export default Rules;
