import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const TextAfterTitleStyled = styled.div`
  font-family: 'Exo',sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: #4B5D68;
  padding: 20px 30%;

  @media (max-width: 990px) and (min-width: 571px) {
    padding: 10px 20%;
  }
  
  @media (max-width: 570px) {
    padding: 10px 10%;
  }
`;

const TextAfterTitle = ({ text }) => (
  <TextAfterTitleStyled>{text}</TextAfterTitleStyled>
);

export default TextAfterTitle;
