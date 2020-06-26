import styled from 'styled-components';

const ImgFullWidth = styled.img`
  width: 70%;
  display: flex;
  margin: 0 auto;
  padding: 16px;
  background-size: contain;
  
  @media (max-width: 990px) and (min-width: 571px)  {
    width: 80%;
  }
  
  @media (max-width: 570px)  {
    width: 100%;
  }
`;

export default ImgFullWidth;
