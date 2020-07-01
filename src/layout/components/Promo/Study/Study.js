import React from 'react';
import { Link } from 'react-router-dom';
import DivStyled from './StudyWrapper';

const Study = () => (
  <DivStyled>
    <h6>
      Учитесь эффективно
    </h6>
    <Link style={{ textAlign: 'center' }} to="login">
      <button className="btn_study" type="submit">Зарегистрироваться</button>
    </Link>
  </DivStyled>
);

export default Study;
