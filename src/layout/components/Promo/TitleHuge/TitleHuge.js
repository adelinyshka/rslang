import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleHugeStyled = styled.div`
  color: #4B5D68;
  max-width: 560px;
  padding: 16px;
  font: bold 80px/110% 'Exo',sans-serif;
  
  @media (max-width: 990px) and (min-width: 571px) {
    margin: 0 auto;
    font-size: 60px;
    text-align: center;
  }
  
    @media (max-width: 570px) {
    font-size: 40px;
    margin: 0 auto;
    text-align: center;
  }
`;

const TitleHuge = ({ text }) => (
  <TitleHugeStyled>{text}</TitleHugeStyled>
);

TitleHuge.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleHuge;
