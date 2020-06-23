import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import screen from './../../assets/images/screen.png';

const ImgScreen = styled.img`
  display: flex;
  margin: 0 auto;
  background-size: contain;
  padding: 0 16px;
  width: 80%;
  
  @media (max-width: 990px) and (min-width: 571px) {
    margin: 0 auto;
    padding: 0 16px;
    width: 80%;
    background-size: contain;
  }
  
  @media (max-width: 570px) {
  width: 100%;
  padding: 0 8px
  }
`;


const Video = () => {
  return(
    <div>
      <ImgScreen src={screen} />
    </div>
  )
}

export default Video;
