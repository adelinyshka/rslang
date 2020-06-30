import React from 'react';
import { Link } from 'react-router-dom';
import DivStyled from './StudyWrapper';

const Study = () => (
  <DivStyled>
    <h6>
      Учитесь эффективно
    </h6>
    <Link to="login">
      <button type="submit">Зарегистрироваться</button>
    </Link>
  </DivStyled>
);

export default Study;
