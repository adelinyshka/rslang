import styled from 'styled-components';

const HeaderWrapper = styled.header`
  li {
    list-style-type: none;
    width: fit-content;
    padding: 17px;
  
    @media(max-width: 1035px) and (min-width: 991px) {
      padding: 10px;
    }
  
    @media(max-width: 990px) {
      padding: 10px 0;
    }
  
  a {
    text-decoration: none;
    font: normal 16px Exo, sans-serif;
    color: #485D68;  
  
    &:hover, &:focus, &:active {
      color: black;
      text-decoration: none;
    }
  }
  }
  
  .logo {
  color: #6979F8 !important;
  font: normal 50px 'Exo', sans-serif !important;
  }

  .enter_btn {
    background: #0AD1BD;
    border: #0AD1BD;
    color: white;
    width: 178px;
    height: 48px;
    margin: 7px 0 7px 0;
  }

  .enter_btn:hover,
  .enter_btn:focus,
  .enter_btn:active {
    background: #08A999;
    border: #08A999;
  }

  @media (max-width: 991px) {
    .logo {
      font: normal 30px 'Exo', sans-serif !important;
    }
  }

  .navbar_promo {
    border-color: transparent !important;
  }

  .navbar_promo:hover,
  .navbar_promo:focus,
  .navbar_promo:active {
    outline: none;
  } 
`;

export default HeaderWrapper;
