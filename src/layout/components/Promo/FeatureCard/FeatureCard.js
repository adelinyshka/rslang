import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeatureWrapper from './FeatureWrapper';
import FeatureBg from './FeatureBg';
import FeatureTitle from './FeatureTitle';
import FeatureText from './FeatureText';

const FeatureCard = ({ src, title, text }) => (
  <FeatureWrapper>
    <FeatureBg src={src}/>
    <FeatureTitle>{title}</FeatureTitle>
    <FeatureText>{text}</FeatureText>
  </FeatureWrapper>
);

export default FeatureCard;
