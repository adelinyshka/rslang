import styled from 'styled-components';

const FeatureTitle = styled.h6`
  position: absolute;
  top: 10%;
  right: 5%;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 130%;
  color: #212353;
  padding: 16px;
  
  @media (max-width: 570px) {
    font-size: 22px;
    right: 10%;
    left: unset;
    max-width: 60%;
    text-align: right;
  }
`;

export default FeatureTitle;
