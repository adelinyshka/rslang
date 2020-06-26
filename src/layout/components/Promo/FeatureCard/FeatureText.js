import styled from 'styled-components';

const FeatureText = styled.p`
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
`;

export default FeatureText;
