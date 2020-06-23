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
  padding: 0 30%;

 
  @media (max-width: 990px) and (min-width: 571px) {
    padding: 0 20%;
  }
  
  @media (max-width: 570px) {
    padding: 0 10%;
  }
`;


const TextAfterTitle = (props) => {
  return (
    <TextAfterTitleStyled>{props.text}</TextAfterTitleStyled>
  );
};

export default TextAfterTitle;
