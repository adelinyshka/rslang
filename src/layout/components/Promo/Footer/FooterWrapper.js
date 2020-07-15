import styled from 'styled-components';

const FooterWrapper = styled.div`
  position: relative;
  background-size: contain;
  width: 100%;
  
  .link-netlify {
    position: relative;
    bottom: -50px;
    z-index: 50;
    font-family: 'Exo', sans-serif;
    font-size: 30px;
    color: black;
    display:flex;
    justify-content: center;
    align-items: center;
    
    & a {
      text-decoration: none;
    
    &:hover {
      text-decoration: none;
      }
    }
    
    
    @media (max-width: 520px) {
    font-size: 20px;
    }
  }
  
  img{
  position: relative;
  background-size: contain;
  width: 100%;
  margin-bottom: -20px;
  }`;

export default FooterWrapper;
