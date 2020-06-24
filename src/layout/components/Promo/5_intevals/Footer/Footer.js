import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import footer_bg from './../../assets/images/footer_bg.svg';

const FooterWrapper = styled.div`
  position: relative;
  background-size: contain;
  width: 100%;
`;

const FooterImg = styled.img`
  position: relative;
  background-size: contain;
  width: 100%;
  margin-bottom: -20px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterImg src={footer_bg}/>
    </FooterWrapper>
  );
};

export default Footer;
