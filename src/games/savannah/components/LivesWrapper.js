import styled from 'styled-components';

const LiveWrapper = styled.div`
  width: 180px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;
  top: 68px;
  right: 30px;
  
  @media(max-width: 768px) {
    justify-content: flex-start;
    top: 11px;
    left: 10px;
  }
  
  img {
    width: 26px;
   
  @media(max-width: 768px) {
    width: 25px;
    }
  }
`;

export default LiveWrapper;
