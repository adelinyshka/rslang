import styled from 'styled-components';

const FeatureWrapper = styled.div`
  position: relative;

  @media (max-width: 850px) {
    width: 100%;
  }

  img {
    position: relative;
    background-size: contain;
    padding: 16px;
    width: 100%;
    min-height: 100px;
  }

  h6 {
    position: absolute;
    top: 10%;
    right: 5%;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 130%;
    color: #212353;
    padding: 16px;
    width: 54%;

    @media (max-width: 570px) {
      font-size: 22px;
      right: 10%;
      left: unset;
      max-width: 60%;
      text-align: right;
    }
  }
  
  p {
  position: absolute;
  top: 40%;
  width: 50%;
  right: 5%;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
  color: #4B5D68;
  
  @media (max-width: 450px) {
    height: 90px;
    overflow-y: scroll;
    font-size: 14px;
    top: 45%;
    padding-right: 5px;
    }

  @media(max-width: 986px) and (min-width:750px) {
    height: 105px;
    overflow-y: scroll;
  }
  }
`;

export default FeatureWrapper;
