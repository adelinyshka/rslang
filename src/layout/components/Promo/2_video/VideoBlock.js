import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import css from './VideoBlock.module.css';
import TitleH2 from '../custom_components/Title_h2';

const DivStyled = styled.div`
  position: relative;
`;

const ImgScreen = styled.img`
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
  }
`;

const VideoYouTube = () => {
  return (
    <div className={css.thumb_wrap}>
      <iframe
        title={'Our super video'}
        className={css.iframe_video}
        width="560" height="315"
        src="https://www.youtube.com/embed/93p3LxR9xfM" frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen/>
    </div>
  );
};

const VideoBlock = () => {
  return (
    <div>
      <TitleH2 text='Что внутри?'/>
      <DivStyled>
        <ImgScreen src={'./assets/images/promo/screen.png'}/>
        <VideoYouTube/>
      </DivStyled>
    </div>
  );
};

export default VideoBlock;
