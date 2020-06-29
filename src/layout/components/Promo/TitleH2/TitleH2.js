import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleH2Styled = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 130%;
  text-align: center;
  color: #4B5D68;
  padding: 50px 0;
  
  @media (max-width: 990px) and (min-width: 571px) {
    font-size: 30px;
    padding: 30px 0;
  }
  
    @media (max-width: 570px) {
    font-size: 22px;
    padding: 16px;
  }
`;

const TitleH2 = ({ text }) => (
  <TitleH2Styled>{text}</TitleH2Styled>
);

TitleH2.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleH2;
