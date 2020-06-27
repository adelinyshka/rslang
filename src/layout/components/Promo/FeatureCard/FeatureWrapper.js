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
`;

export default FeatureWrapper;
