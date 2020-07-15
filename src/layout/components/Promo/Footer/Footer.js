import React from 'react';
import { Link } from 'react-router-dom';
import FooterWrapper from './FooterWrapper';

const Footer = () => (
  <FooterWrapper>
    <div className="link-netlify">
      <Link to="https://github.com/alekchaik/rslang/">
        Cсылка на Github-репозиторий
      </Link>
    </div>
    <img src="./assets/images/promo/footer_bg.svg" alt="green triangles" />
  </FooterWrapper>
);

export default Footer;
