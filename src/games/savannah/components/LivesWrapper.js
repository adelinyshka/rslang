import styled from 'styled-components';

const LiveWrapper = styled.div`
  width: 180px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;
  top: 50px;
  right: 25px;
  
  @media(max-width: 768px) {
    justify-content: flex-start;
    top: 17px;
    left: 25px;
  }
  
  img {
    transform: scale(0.8);
  }
`;

export default LiveWrapper;
