import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

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
      <FooterImg src={'./assets/images/promo/footer_bg.svg'}/>
    </FooterWrapper>
  );
};

export default Footer;
