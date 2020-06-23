import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeatureWrapper from '../FeatureWrapper';
import FeatureBg from '../FeatureBg';
import FeatureTitle from '../FeatureTitle';
import FeatureText from '../FeatureText';

const FeatureCard = (props) => {
  return (
    <FeatureWrapper>
      <FeatureBg src={props.src}/>
      <FeatureTitle>{props.title}</FeatureTitle>
      <FeatureText>{props.text}</FeatureText>
    </FeatureWrapper>
  );
};

export default FeatureCard;
