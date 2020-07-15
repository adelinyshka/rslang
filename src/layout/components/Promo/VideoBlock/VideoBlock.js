import React from 'react';
import VideoWrapper from './VideoWrapper';

const VideoBlock = () => (
  <VideoWrapper>
    <img
      src="./assets/images/promo/screen.png"
      alt={'picture of'
      + ' notebook monitor'}
    />
    <div className="thumb_wrap">
      <iframe
        title="Our super video"
        className="iframe_video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/93p3LxR9xfM"
        frameBorder="0"
        allow="accelerometer; autoplay;
        encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </VideoWrapper>
);

export default VideoBlock;
