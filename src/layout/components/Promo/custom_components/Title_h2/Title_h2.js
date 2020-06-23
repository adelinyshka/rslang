import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const TitleH2Styled = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 130%;
  text-align: center;
  color: #212353;
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


const TitleH2 = (props) => {
  return (
    <TitleH2Styled>{props.text}</TitleH2Styled>
  );
};

export default TitleH2;
