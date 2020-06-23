import styled from 'styled-components';

const ImgMainPageStyled = styled.img`
  width: 500px;
  margin-top: 100px;
  display: inline-block;
  
  @media (max-width: 990px)  {
    margin: -20px auto 0;
    display: flex;
    background-size: contain;
    width: 100%;
    padding: 16px;
  }
`;

export default ImgMainPageStyled;
