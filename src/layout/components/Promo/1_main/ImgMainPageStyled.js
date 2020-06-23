import styled from 'styled-components';

const ImgMainPageStyled = styled.img`
  width: 700px;
  margin-top: 100px;
  display: inline-block;
  padding: 16px;
  
  @media (max-width: 990px)  {
    margin: -20px auto 0;
    display: flex;
    background-size: contain;
    width: 60%;
    padding: 16px;
  }
`;

export default ImgMainPageStyled;
