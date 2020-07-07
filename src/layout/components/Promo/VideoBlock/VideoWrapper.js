import React from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.div`
  position: relative;

  .thumb_wrap {
    position: relative;
    padding-bottom: 56.25%; 
    height: 0;
    overflow: hidden;
  }

  .iframe_video {
    position: absolute;
    top: 50px;
    left: 20%;
    width: 58%;
    height: 60%;
    border-width: 0;
    outline-width: 0;
  }

  @media (max-width: 769px) {
    .iframe_video {
      top: 30px;
    }
  }

  @media (max-width: 570px) {
    .iframe_video {
      top: 20px;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 10px;
    }
  }

  img {
    position: absolute;
    left: 9%;
    width: 81%;
    background-size: contain;
    padding: 0 16px;
  

  @media (max-width: 990px) and (min-width: 571px) {
    margin: 0 auto;
    padding: 0 16px;
    width: 80%;
    background-size: contain;
  }

  @media (max-width: 570px) {
    width: 100%;
    padding: 0 8px;
    left: 0;
    display: none;
    }
  }
`;

export default VideoWrapper;
