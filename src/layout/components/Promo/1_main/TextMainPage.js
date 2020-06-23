import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const TextMainPageStyled = styled.div`
  color: #4B5D68;
  max-width: 420px;
  padding: 20px 16px;
  font: normal 18px/170% 'Exo',sans-serif;
  display: inline-block;
  
  @media (max-width: 990px) and (min-width: 571px) {
    margin: 0 auto;
    font-size: 16px;
    text-align: left;
  }
  
    @media (max-width: 570px) {
    font-size: 16px;
    display:flex;
    text-align: center;
    max-width: none;
  }
`;


const TextMainPage = (props) => {
  return (
    <TextMainPageStyled>{props.text}</TextMainPageStyled>
  );
};

export default TextMainPage;
